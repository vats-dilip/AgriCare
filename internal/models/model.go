package models

type Schemes struct {
	Id          string `json:"_id" bson:"_id"`
	Name        string `json:"name" bson:"name"`
	Sector      string `json:"sector" bson:"sector"`
	Description string `json:"description" bson:"description"`
}
