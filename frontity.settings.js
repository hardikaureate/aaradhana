const settings = {
    "name": "aaradhanafrontity",
    "state": {
        "frontity": {
            "url": "https://test.frontity.org",
            "title": "Test Frontity Blog",
            "description": "WordPress installation for Frontity development"
        }
    },
    "packages": [{
            "name": "@frontity/mars-theme",
            "state": {
                "theme": {
                    "menu": [
                        [
                            "Home",
                            "/"
                        ],
                        [
                            "Nature",
                            "/category/nature/"
                        ],
                        [
                            "Travel",
                            "/category/travel/"
                        ],
                        [
                            "Japan",
                            "/tag/japan/"
                        ],
                        [
                            "About Us",
                            "/about-us/"
                        ]
                    ],
                    "featured": {
                        "showOnList": false,
                        "showOnPost": false
                    }
                }
            }
        },
        {
            "name": "@frontity/wp-source",
            "state": {
                "source": {
                    "url": "https://aradhnadevelop.wpengine.com",
                    "homepage": "/home",
                    "postTypes": [{
                        "type": "Products",
                        "endpoint": "Products",
                        "archive": "/products_archive",
                    }]
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react",
        "frontity-contact-form-7"
    ]
};
export default settings;