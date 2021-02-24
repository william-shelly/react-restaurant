import Header from "../components/header.js"
import Footer from "../components/footer.js"
import MenuItemPreview from "../components/menuitempreview.js"

export default function Home() {

    const starters = [
        {
            "name": "Artichoke Dip",
            "image": "https://www.cookingclassy.com/wp-content/uploads/2018/12/spinach-artichoke-dip-13-768x1148.jpg",
            "description": "Artichoke Hearts, Cream Cheese, Parmesan, and Pita Bread"
        },
        {
            "name": "Pulled Pork Nachos",
            "image": "https://s23209.pcdn.co/wp-content/uploads/2019/10/Instant-Pot-Pulled-Pork-NachosIMG_0233.jpg",
            "description": "Tortilla Chips and Smoked Pulled Pork Covered with Shredded Cheese, White Queso, Pico De Gallo, Sour Cream, and BBQ Sauce"
        },
        {
            "name": "Buffalo Wings",
            "image": "https://www.dinneratthezoo.com/wp-content/uploads/2016/08/baked-buffalo-wings-11.jpg.webp",
            "description": "8 Wings Served with Ranch or Blue Cheese"
        },
        {
            "name": "Roasted Garlic Hummus",
            "image": "https://www.cookingclassy.com/wp-content/uploads/2014/09/roasted-garlic-hummus7-edit2+srgb..jpg",
            "description": "with Veggie Sticks"
        },
        {
            "name": "Tortilla Chips",
            "image": "https://www.gimmesomeoven.com/wp-content/uploads/2020/08/Homemade-Tortilla-Chips-Recipe-6.jpg",
            "description": "Housemade Salsa and White Queso"
        },
        {
            "name": "Mozzarella Sticks",
            "image": "https://lilluna.com/wp-content/uploads/2017/12/mozz-sticks-resize-7.jpg",
            "description": "6 Fried Mozzerella Sticks served with Ranch or Marinara"
        },
        {
            "name": "Chicken Quesadilla",
            "image": "https://www.spendwithpennies.com/wp-content/uploads/2020/01/Chicken-Quesadillas-1.jpg",
            "description": "Giant Flour Tortilla, Grilled Chicken Breast, Shredded Cheddar Jack, with a Side of Salsa and Sour Cream"
        }
    ];

    const entrees = [
        {
            "name": "Fish & Chips",
            "image": "https://bloximages.newyork1.vip.townnews.com/tulsaworld.com/content/tncms/assets/v3/editorial/3/97/39767e51-3c46-5f0d-9f8a-e4810502211e/5c86ad0a7212b.image.jpg?resize=990%2C651",
            "description": "Fried Icelandic Haddock, Fries, and Tartar Sauce"
        },
        {
            "name": "Steak & Fries",
            "image": "https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Steak_Frites_V10-700x461.jpg",
            "description": "8oz Filet with Blue Cheese Butter, Fries"
        },
        {
            "name": "South City Chicken",
            "image": "https://assets.bonappetit.com/photos/5b69f160dbdc967b93bc1c42/1:1/w_2560%2Cc_limit/ba-grilled-chicken-sando.jpg",
            "description": "Grilled Chicken Breast with Pepper Jack Cheese, Pico de Gallo, Avocado, and a Side of Seasonal Vegetables"
        },
        {
            "name": "Salmon",
            "image": "https://cookthestory.com/wp-content/uploads/2017/05/Baked-Salmon-Dinner-DPV.jpg",
            "description": "Seared Atlantic Salmon Topped with Lemon Thyme Butter, served with Seasonal Vegetables"
        },
        {
            "name": "Blackened Chicken Mac & Cheese",
            "image": "http://1.bp.blogspot.com/-7MK3BNrn9Gg/UeXyiHcHaEI/AAAAAAAADA0/bFCCeGHJWYE/s640/photo20_zpsb28d8263.jpg",
            "description": ""
        },
        {
            "name": "Cottage Pie",
            "image": "https://www.recipetineats.com/wp-content/uploads/2016/10/Cottage-Pie_5.jpg?resize=650,813",
            "description": "Beef Tips, Green Peas, Covered with Mashed Potatoes and Shredded Cheddar Jack, with Seasonal Vegetables"
        },
        {
            "name": "Chicken Fingers",
            "image": "https://www.dinneratthezoo.com/wp-content/uploads/2015/04/chicken-fingers-4.jpg",
            "description": "Hand-Breaded Chicken Fingers with Fries"
        },
        {
            "name": "Cajun Meatloaf",
            "image": "https://www.jessicagavin.com/wp-content/uploads/2018/11/meatloaf-6-600x900.jpg",
            "description": "Our Classic Cajun-Style Meatloaf topped Mushroom Gravy, served with Mashed Potatoes and Seasonal Vegetables"
        },
        {
            "name": "Brat Platter",
            "image": "https://www.azgrabaplate.com/wp-content/uploads/sheet.jpg",
            "description": "Two Bratwurst with Sauerkraut, Marble Rye Toast served with Mashed Potatoes and Gravy, side of Spicy Brown Mustard"
        },
        {
            "name": "Irish Breakfast",
            "image": "https://www.happyfoodstube.com/wp-content/uploads/2019/03/full-irish-breakfast-picture.jpg",
            "description": "Two Eggs Over Easy, Black Pudding, Bangers, Rashers, Baked Beans, Grilled Tomatoes, Grilled Mushrooms, Rye Toast"
        }
    ];

    const desserts = [
        {
            "name": "White Chocolate Brownie",
            "image": "https://www.justsotasty.com/wp-content/uploads/2017/01/White-Chocolate-Brownies-6.jpg",
            "description": "Large Chocolate Brownie with Walnuts, Topped with Vanilla Ice Cream and Chocolate Sauce"
        },
        {
            "name": "Carrot Cake",
            "image": "https://www.cookingclassy.com/wp-content/uploads/2020/04/carrot-cake-20-1-600x900.jpg",
            "description": "Layered Carrot Cake Covered with Cream Cheese Frosting and Walnuts"
        },
        {
            "name": "Chocolate Sundae",
            "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/8/10/1/WU1407H_mexican-chocolate-sundae_s4x3.jpg.rend.hgtvcom.826.620.suffix/1473869103912.jpeg",
            "description": "Vanilla with Chocolate Brownie Chocolate Syrup and Cherries"
        }
    ];

    return(
        <>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 intro-area d-flex flex-column justify-content-center align-items-center">
                    <h1 className="fs-1 pb-4">Welcome to Kilkennys</h1>
                    <p className="fs-6 text-center">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                </div>
                <div className="col-sm-12">
                    <div class="row">
                        <div className="col py-2 d-flex justify-content-center align-items-center">
                            <h2 className="fs-3">Starters</h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                    {starters.map((item) => {
                        return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
                    })}
                    </div>

                    <div class="row">
                    <div className="col py-2 d-flex justify-content-center align-items-center">
                            <h2 className="fs-3">Entrees</h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                    {entrees.map((item) => {
                        return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
                    })}
                    </div>

                    <div class="row">
                    <div className="col py-2 d-flex justify-content-center align-items-center">
                            <h2 className="fs-3">Desserts</h2>
                        </div>
                    </div>
                    <div className="row mb-5">
                    {desserts.map((item) => {
                        return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
                    })}
                    </div>

                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}
