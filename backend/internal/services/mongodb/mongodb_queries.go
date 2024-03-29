package mongodb

import (
	"portfolio/internal/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func GetRoadmap() (models.KeyValueSlice, error) {
	col := db.Collection("portfolio")

	filter := bson.D{{Key: "year", Value: bson.D{{Key: "$exists", Value: true}}}}

	findOptions := options.Find().SetSort(bson.D{{Key: "year", Value: 1}})

	cursor, err := col.Find(ctx, filter, findOptions)
	if err != nil {
		return nil, err
	}

	var data models.KeyValueSlice
	if err = cursor.All(ctx, &data); err != nil {
		return nil, err
	}

	return data, nil
}
