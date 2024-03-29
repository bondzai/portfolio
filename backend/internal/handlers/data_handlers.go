package handlers

import (
	"errors"
	"log"

	"portfolio/internal/services"
	"portfolio/internal/services/redis"

	"github.com/gofiber/fiber/v2"
)

type DataHandler struct {
	RedisClient redis.RedisCache
}

func NewDataHandler() DataHandler {
	return DataHandler{
		RedisClient: redis.NewRedisCache(),
	}
}

func (h *DataHandler) HandleData(c *fiber.Ctx) error {
	dataParams := make(map[string]interface{})
	dataType := c.Params("dataType")

	switch dataType {
	case "roadmap":
		dataParams["dataSource"] = "mongodb"
		dataParams["dataType"] = dataType

	case "wakatime":
		dataParams["dataSource"] = "httpRequests"
		dataParams["dataType"] = dataType

	case "skills", "projects", "certifications":
		dataParams["dataSource"] = "googlesheet"
		dataParams["dataType"] = dataType

	default:
		return nil
	}

	data, err := services.GetData(h.RedisClient, dataParams)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.JSON(data)
}

func (h *DataHandler) FlushCache(c *fiber.Ctx) error {
	err := h.RedisClient.FlushAllCache()
	if err != nil {
		log.Println("Error flush cache: ", err)
		return errors.New(err.Error())
	}

	return c.SendStatus(fiber.StatusOK)
}
