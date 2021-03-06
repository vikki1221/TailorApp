export default Tailors = [
    {
        'id': 1, 
        'email': 't1@email.com',
        'username': 'Tailor1 shop', 
        'password': 'tailor1', 
        'rating':5,
        'products':[
            {
                "name": "Simple Blouse",
                "val":"simpleBlouse",
                "price": "200"
            },
            {
                "name": "Sharara",
                "price": "400"
            },
            {
                "name": "Kurta",
                "price": "200"
            },
            {
                "name": "Sharara",
                "price": "400"
            },
            {
                "name": "Kurta",
                "price": "200"
            },
            {
                "name": "Sharara",
                "price": "400"
            }
        ],
        'locality':'Mansarovar',
        'city':'Jaipur',
        'address':'Shop No. 8,Near Raja Park',
        'simpleBlouse': 'true',
        'designerBlouse':'false',
        'kurta':'true',
        'skirt':'true',
        'sharara':'true',
        'pyjamas':'true',
        'shirtMale':'true',
        'pantsMale':'true',
        'blazer':'true',
        'suit':'true',
        
        'images': [
            require('../assets/Tailors.jpg'),
            require('../assets/Tailors.jpg'),
          ]
    },
    {
        'id': 2, 
        'email': 't2@email.com',
        'username': 'Tailor2', 
        'password': 'tailor2',  
        'rating':3,
        'products':[
            {
                "name": "Kurta",
                "price": "200"
            },
            {
                "name": "Sharara",
                "price": "400"
            }
        ],
        'locality':'Mansarovar',
        'city':'Jaipur',
        'address':'Shop No. 9,Near Raja Park',
        'simpleBlouse': 'false',
        'designerBlouse':'true',
        'kurta':'true',
        'skirt':'true',
        'sharara':'false',
        'pyjamas':'true',
        'shirtMale':'false',
        'pantsMale':'true',
        'blazer':'false',
        'suit':'true',
        'images': [
            require('../assets/female.png'),
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", 
          ]
    },
    {
        'id': 3, 
        'email': 't3@email.com',
        'username': 'tailor3', 
        'password': 'tailor3', 
        'rating':"4.9", 
        'products':[
            {
                "name": "Kurta",
                "price": "200"
            },
            {
                "name": "Sharara",
                "price": "400"
            }
        ],
        'locality':'Mansarovar',
        'city':'Jaipur',
        'address':'Shop No. 9,Near Raja Park',
        'simpleBlouse': 'true',
        'designerBlouse':'true',
        'kurta':'true',
        'skirt':'false',
        'sharara':'true',
        'pyjamas':'false',
        'shirtMale':'false',
        'pantsMale':'true',
        'blazer':'true',
        'suit':'true',
        'images': [
            require('../assets/male.png'),
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", 
          ]
    },
    {
        'id': 4, 
        'email': 't4@email.com',
        'username': 'tailor4', 
        'password': 'tailor4', 
        'rating':1,
        'products':[
            {
                "name": "Kurta",
                "price": "200"
            },
            {
                "name": "Sharara",
                "price": "400"
            }
        ],
        'locality':'Mansarovar',
        'city':'Jaipur',
        'address':'Shop No. 9,Near Raja Park', 
        'simpleBlouse': 'true',
        'designerBlouse':'false',
        'kurta':'false',
        'skirt':'true',
        'sharara':'false',
        'pyjamas':'true',
        'shirtMale':'true',
        'pantsMale':'false',
        'blazer':'true',
        'suit':'false',
        'images': [
            require('../assets/female.png'),
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", 
          ]
    }
];