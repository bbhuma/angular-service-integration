SignUpAPI:
POST - http://localhost:8080/api/users/signup

{
    "id": 4,
    "firstName": "bala gangadhar reddy",
    "lastName": "bhuma",
    "mobileNumber": 2149402456,
    "address": "475 W San Carlos St",
    "role": "manager",
    "email": "bgrbhuma@gmail.com",
    "password": "1234",
    "confirmPassword": "1234"
}

Employees API:
POST - http://localhost:8080/api/employees

{
    "firstName": "bala gangadhar reddy",
    "lastName": "bhuma",
    "email": "bgrbhuma@gmail.com",
    "password": "sdfghuytf",
    "age": 32,
    "dob": "1992-06-06",
    "gender": "male",
    "department": "Engineering",
    "resume": "C:\\fakepath\\BillImage.pdf",
    "bio": "treytyrutouko",
    "terms": true
}
Product API - 
POST - http://localhost:8080/api/products/add
GET 'https://dummyjson.com/products'
GET 'https://dummyjson.com/products/1'
'https://dummyjson.com/products/search?q=phone'
'https://dummyjson.com/products?limit=10&skip=10&select=title,price&sortBy=title&order=asc'
'https://dummyjson.com/products?sortBy=title&order=asc'
'https://dummyjson.com/products/categories'
'https://dummyjson.com/products/category-list'
'https://dummyjson.com/products/category/smartphones'
'https://dummyjson.com/products/add'
[
    {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "price": 9.99,
        "discountPercentage": 7.17,
        "rating": 4.94,
        "stock": 5,
        "tags": [
            "beauty",
            "mascara"
        ],
        "brand": "Essence",
        "sku": "RCH45Q1A",
        "weight": 2,
        "dimensions": {
            "width": 23.17,
            "height": 14.43,
            "depth": 28.01
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 1 month",
        "availabilityStatus": "Low Stock",
        "reviews": [
            {
                "rating": 2,
                "comment": "Very unhappy with my purchase!",
                "date": "2024-05-23T08:56:21.618Z",
                "reviewerName": "John Doe",
                "reviewerEmail": "john.doe@x.dummyjson.com"
            },
            {
                "rating": 2,
                "comment": "Not as described!",
                "date": "2024-05-23T08:56:21.618Z",
                "reviewerName": "Nolan Gonzalez",
                "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Very satisfied!",
                "date": "2024-05-23T08:56:21.618Z",
                "reviewerName": "Scarlett Wright",
                "reviewerEmail": "scarlett.wright@x.dummyjson.com"
            }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 24,
        "meta": {
            "createdAt": "2024-05-23T08:56:21.618Z",
            "updatedAt": "2024-05-23T08:56:21.618Z",
            "barcode": "9164035109868",
            "qrCode": "https://dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
        ],
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },