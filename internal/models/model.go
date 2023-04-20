package models

type Schemes struct {
	Id          string `json:"_id" bson:"_id"`
	Name        string `json:"name" bson:"name"`
	Sector      string `json:"sector" bson:"sector"`
	Description string `json:"description" bson:"description"`
	Image       string `json:"image" bson:"image"`
}

type RegistrationForm struct {
	RegistrationId string `json:"registrationId" bson:"regsitrationId"`
	Name           string `json:"name" bson:"name"`
	MobileNumber   string `json:"mobileNumber" bson:"mobileNumber"`
	EmailId        string `json:"emailId" bson:"emailId"`
	AadharNumber   string `json:"aadharNumber" bson:"aadharNumber"`
	Address        string `json:"address" bson:"address"`
	SchemeName     string `json:"schemeName" bson:"schemeName"`
	SchemeId       string `json:"schemeId" bson:"schemeId"`
}
