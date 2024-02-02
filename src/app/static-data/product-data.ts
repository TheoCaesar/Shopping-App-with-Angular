import { Product } from "../models/product";

export const productData:Product[] = [
    {
      "id": 1,
      "name": "Laptop XYZ",
      "description": "Powerful laptop for professional use",
      "price": 1299.99,
      "availableSince": "2023-01-15T08:00:00Z",
      "isActive": true,
      "categoryId": 1,
      "productImages": [
        {
          "id": 1,
          "base64Image": "base64-encoded-image-data",
          "mime": "image/jpeg",
          "imageName": "laptop-xyz-image1.jpg",
          "productId": 1
        },
        {
          "id": 2,
          "base64Image": "base64-encoded-image-data",
          "mime": "image/jpeg",
          "imageName": "laptop-xyz-image2.jpg",
          "productId": 1
        }
      ]
    },
    {
      "id": 2,
      "name": "Smartphone Z",
      "description": "Feature-rich smartphone with AI capabilities",
      "price": 899.99,
      "availableSince": "2023-02-10T10:30:00Z",
      "isActive": true,
      "categoryId": 2,
      "productImages": [
        {
          "id": 3,
          "base64Image": "base64-encoded-image-data",
          "mime": "image/png",
          "imageName": "smartphone-z-image1.png",
          "productId": 2
        },
        {
          "id": 4,
          "base64Image": "base64-encoded-image-data",
          "mime": "image/png",
          "imageName": "smartphone-z-image2.png",
          "productId": 2
        }
      ]
    },
    {
        "id": 1,
        "name": "Smartphone X",
        "description": "High-end smartphone with advanced features",
        "price": 799.99,
        "availableSince": "2023-01-01T08:00:00Z",
        "isActive": true,
        "categoryId": 1,
        "productImages": [
        {
            "id": 1,
            "base64Image": "base64-encoded-image-data",
            "mime": "image/jpeg",
            "imageName": "smartphone-x-image1.jpg",
            "productId": 1
        },
        {
            "id": 2,
            "base64Image": "base64-encoded-image-data",
            "mime": "image/jpeg",
            "imageName": "smartphone-x-image2.jpg",
            "productId": 1
        }
        ]
    },
    {
      "id": 10,
      "name": "Camera ABC",
      "description": "High-resolution DSLR camera for photography enthusiasts",
      "price": 699.99,
      "availableSince": "2023-04-01T14:45:00Z",
      "isActive": true,
      "categoryId": 3,
      "productImages": [
        {
          "id": 19,
          "base64Image": "base64-encoded-image-data",
          "mime": "image/jpeg",
          "imageName": "camera-abc-image1.jpg",
          "productId": 10
        },
        {
          "id": 20,
          "base64Image": "base64-encoded-image-data",
          "mime": "image/jpeg",
          "imageName": "camera-abc-image2.jpg",
          "productId": 10
        }
      ]
    },
    {
        "id": 101,
        "name": "Camera Y",
        "description": "Professional-grade digital camera",
        "price": 599.99,
        "availableSince": "2023-03-05T14:45:00Z",
        "isActive": true,
        "categoryId": 3,
        "productImages": [
          {
            "id": 201,
            "base64Image": "base64-encoded-image-data",
            "mime": "image/jpeg",
            "imageName": "camera-y-image1.jpg",
            "productId": 101
          },
          {
            "id": 202,
            "base64Image": "base64-encoded-image-data",
            "mime": "image/jpeg",
            "imageName": "camera-y-image2.jpg",
            "productId": 101
          }
        ]
    },
    {
        "id": 201,
        "name": "Headphones Z",
        "description": "Wireless over-ear headphones with noise cancellation",
        "price": 129.99,
        "availableSince": "2023-04-20T09:15:00Z",
        "isActive": true,
        "categoryId": 4,
        "productImages": [
          {
            "id": 401,
            "base64Image": "base64-encoded-image-data",
            "mime": "image/jpeg",
            "imageName": "headphones-z-image1.jpg",
            "productId": 201
          },
          {
            "id": 402,
            "base64Image": "base64-encoded-image-data",
            "mime": "image/jpeg",
            "imageName": "headphones-z-image2.jpg",
            "productId": 201
          }
        ]
    },
    {
        "id": 301,
        "name": "Smartwatch A",
        "description": "Fitness tracking smartwatch with heart rate monitor",
        "price": 149.99,
        "availableSince": "2023-05-10T11:30:00Z",
        "isActive": true,
        "categoryId": 5,
        "productImages": [
          {
            "id": 601,
            "base64Image": "base64-encoded-image-data",
            "mime": "image/png",
            "imageName": "smartwatch-a-image1.png",
            "productId": 301
          },
          {
            "id": 602,
            "base64Image": "base64-encoded-image-data",
            "mime": "image/png",
            "imageName": "smartwatch-a-image2.png",
            "productId": 301
          }
        ]
    },
    {
        "id": 401,
        "name": "Gaming Console X",
        "description": "High-performance gaming console for immersive gaming experiences",
        "price": 399.99,
        "availableSince": "2023-06-25T15:45:00Z",
        "isActive": true,
        "categoryId": 6,
        "productImages": [
          {
            "id": 801,
            "base64Image": "base64-encoded-image-data",
            "mime": "image/jpeg",
            "imageName": "gaming-console-x-image1.jpg",
            "productId": 401
          },
          {
            "id": 802,
            "base64Image": "base64-encoded-image-data",
            "mime": "image/jpeg",
            "imageName": "gaming-console-x-image2.jpg",
            "productId": 401
          }
        ]
      }, 
]
  