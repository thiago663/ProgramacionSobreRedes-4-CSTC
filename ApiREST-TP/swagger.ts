import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";


const swaggerDefinition: OAS3Definition = {
    "openapi": "3.0.0",
    "info": {
      "title": "Infection Cases API",
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "http://localhost:1234"
      }
    ],
    "tags": [
      {
        "name": "Caso",
        "description": "Casos registrados de infeccion"
      },
      {
        "name": "Virus",
        "description": "Access to Petstore orders"
      }
    ],
    "paths": {
      "/infection": {
        "get": {
          "tags": [
            "Caso"
          ],
          "summary": "Listar casos",
          "description": "Lista todos los casos que se encuentren en el Array.",
          "responses": {
            "200": {
              "description": "Retorna todos los casos.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Case"
                  }
                }
              }
            },
            "404": {
              "description": "No se ha encontrado ningun Caso en el Array."
            }
          }
        },
        "post": {
          "tags": [
            "Caso"
          ],
          "summary": "Añade un nuevo caso",
          "description": "Ingresa un nuevo caso al Array.",
          "requestBody": {
            "description": "Crear un nuevo caso",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Case"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Case"
                }
              },
              "application/x-www-form-urlencoded": {
                "schema": {
                  "$ref": "#/components/schemas/Case"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Caso creado exitosamente",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Case"
                  }
                }
              }
            },
            "405": {
              "description": "No se ha podido crear el caso"
            }
          }
        }
      },
      "/infection/{caseId}": {
        "get": {
          "tags": [
            "Caso"
          ],
          "summary": "Listar un caso segun su Id",
          "description": "Retorna un solo caso si lo encuentra mediante  su id",
          "parameters": [
            {
              "name": "caseId",
              "in": "path",
              "description": "ID del caso a retornar",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Retorna el caso.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Case"
                  }
                }
              }
            },
            "404": {
              "description": "No se ha encontrado ningun Caso con ese Id."
            }
          }
        },
        "delete": {
          "tags": [
            "Caso"
          ],
          "summary": "Borrar un caso segun su Id",
          "description": "Borra un solo caso si lo encuentra mediante su id",
          "parameters": [
            {
              "name": "caseId",
              "in": "path",
              "description": "ID del caso a borrar",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "El caso fue borrado."
            },
            "404": {
              "description": "No se ha encontrado ningun Caso con ese Id."
            }
          }
        },
        "put": {
          "tags": [
            "Caso"
          ],
          "summary": "Actualiza un caso ya existente",
          "description": "Cambia todos los valores de un caso determinado",
          "parameters": [
            {
              "name": "caseId",
              "in": "path",
              "description": "ID del caso",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "description": "Actualizar un caso",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Case"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Case"
                }
              },
              "application/x-www-form-urlencoded": {
                "schema": {
                  "$ref": "#/components/schemas/Case"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Actualiza correctamente el caso.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Case"
                  }
                }
              }
            },
            "404": {
              "description": "No se ha encontrado ningun Caso con ese Id."
            }
          }
        },
        "patch": {
          "tags": [
            "Caso"
          ],
          "summary": "Actualiza el virus de un caso existente",
          "description": "Cambia todos los valores de la clase Virus en un caso determinado",
          "parameters": [
            {
              "name": "caseId",
              "in": "path",
              "description": "ID del caso",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "description": "Actualiza el virus de un caso",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Virus"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Virus"
                }
              },
              "application/x-www-form-urlencoded": {
                "schema": {
                  "$ref": "#/components/schemas/Virus"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Actualiza correctamente el caso.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Virus"
                  }
                }
              }
            },
            "404": {
              "description": "No se ha encontrado ningun Caso con ese Id."
            }
          }
        }
      },
      "/infection/case/{age}": {
        "get": {
          "tags": [
            "Caso"
          ],
          "summary": "Lista casos con una determinada edad",
          "description": "Retorna los casos que concuerdan con la edad recibida",
          "parameters": [
            {
              "name": "age",
              "in": "path",
              "description": "Edad del sujeto",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Retorna el caso.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Case"
                  }
                }
              }
            },
            "404": {
              "description": "No se ha encontrado ningun Caso con esa edad."
            }
          }
        }
      },
      "/infection/virus/{name}": {
        "get": {
          "tags": [
            "Virus"
          ],
          "summary": "Lista casos con un determinado virus",
          "description": "Retorna los casos que concuerdan con el nombre de virus recibido",
          "parameters": [
            {
              "name": "name",
              "in": "path",
              "description": "Nombre del virus",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Retorna los casos con ese virus.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Case"
                  }
                }
              }
            },
            "404": {
              "description": "No se ha encontrado ningun Caso con ese Virus."
            }
          }
        }
      },
      "/infection/virus/{name}/vaccine": {
        "get": {
          "tags": [
            "Virus"
          ],
          "summary": "Devuelve si un virus tiene vacuna o no",
          "description": "Se busca si el virus enviado tiene vacuna",
          "parameters": [
            {
              "name": "name",
              "in": "path",
              "description": "Nombre del virus",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Retorna si el virus tiene o no vacuna",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Virus"
                  }
                }
              }
            },
            "404": {
              "description": "No se ha encontrado ningun Caso con ese Virus."
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "Case": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "example": 234
            },
            "caseVirus": {
              "$ref": "#/components/schemas/Virus"
            },
            "caseDate": {
              "type": "string",
              "format": "date-time",
              "example": "2023-10-03T03:00:00.000Z"
            },
            "age": {
              "type": "integer",
              "example": 23
            },
            "gender": {
              "type": "string",
              "example": "Male"
            },
            "location": {
              "type": "string",
              "example": "-131451514,24 3848592,35"
            },
            "subjectState": {
              "type": "string",
              "example": "Stable"
            }
          }
        },
        "Virus": {
          "type": "object",
          "properties": {
            "sciName": {
              "type": "string",
              "example": "Covid-19"
            },
            "virusType": {
              "type": "string",
              "example": "Severe Acute Respiratory Syndrome"
            },
            "hasVaccine": {
              "type": "boolean",
              "example": true
            }
          }
        }
      }
    }
  };


const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./index.ts"],
  };    

export default swaggerJSDoc(swaggerOptions);