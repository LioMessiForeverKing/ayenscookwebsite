const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	const userIds = ["66722eaab0ebdcee2cec31e0", "6680817d506d87610b808fb9"];

	const fskdfjsdf = [
		{
			title: "Spaghetti Carbonara",
			oneline: "A classic Italian pasta dish with creamy sauce.",
			description:
				"This delicious recipe for Spaghetti Carbonara is perfect for a quick yet hearty meal. It combines eggs, cheese, pancetta, and pepper to create a creamy and flavorful sauce.",
			steps: [
				"Cook spaghetti according to package instructions.",
				"In a separate pan, cook pancetta until crispy.",
				"Beat eggs and mix with grated cheese and pepper.",
				"Combine pasta, pancetta, and egg mixture, and serve immediately.",
			],
			ingredients: [
				{ name: "Spaghetti", amount: "200g" },
				{ name: "Pancetta", amount: "100g" },
				{ name: "Eggs", amount: "2 large" },
				{ name: "Parmesan cheese", amount: "50g" },
				{ name: "Black pepper", amount: "to taste" },
			],
			extraInfo: "Use freshly grated Parmesan for the best flavor.",
			servingSize: 2,
			expectedTime: "20 minutes",
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		{
			title: "Chicken Alfredo",
			oneline: "Creamy pasta with chicken and Alfredo sauce.",
			description:
				"Chicken Alfredo is a rich and creamy pasta dish that combines tender chicken with a luxurious Alfredo sauce. It's a comforting meal that's sure to satisfy.",
			steps: [
				"Cook pasta according to package instructions.",
				"In a pan, cook chicken until golden brown.",
				"Prepare Alfredo sauce by melting butter and adding cream and cheese.",
				"Mix pasta, chicken, and sauce, and serve hot.",
			],
			ingredients: [
				{ name: "Pasta", amount: "200g" },
				{ name: "Chicken breast", amount: "200g" },
				{ name: "Heavy cream", amount: "100ml" },
				{ name: "Butter", amount: "50g" },
				{ name: "Parmesan cheese", amount: "50g" },
			],
			extraInfo: "Add a pinch of nutmeg for extra flavor.",
			servingSize: 2,
			expectedTime: "30 minutes",
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[1],
		},
		{
			title: "Vegetable Stir Fry",
			oneline: "Quick and healthy vegetable stir fry.",
			description:
				"This Vegetable Stir Fry is a quick and easy dish that's packed with flavor and nutrition. It's perfect for a busy weeknight meal and can be customized with your favorite vegetables.",
			steps: [
				"Heat oil in a pan and add garlic and ginger.",
				"Add mixed vegetables and stir fry until tender.",
				"Add soy sauce and sesame oil, and serve with rice.",
			],
			ingredients: [
				{ name: "Mixed vegetables", amount: "300g" },
				{ name: "Garlic", amount: "2 cloves" },
				{ name: "Ginger", amount: "1 inch" },
				{ name: "Soy sauce", amount: "2 tbsp" },
				{ name: "Sesame oil", amount: "1 tbsp" },
			],
			extraInfo:
				"You can use any vegetables you like, such as bell peppers, broccoli, and carrots.",
			servingSize: 2,
			expectedTime: "15 minutes",
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		{
			title: "Beef Tacos",
			oneline: "Flavorful beef tacos with all the fixings.",
			description:
				"Beef Tacos are a fun and flavorful meal that everyone will love. They're easy to make and can be customized with your favorite toppings.",
			steps: [
				"Cook ground beef with taco seasoning.",
				"Warm tortillas in a pan.",
				"Assemble tacos with beef, cheese, lettuce, and salsa.",
			],
			ingredients: [
				{ name: "Ground beef", amount: "200g" },
				{ name: "Taco seasoning", amount: "1 packet" },
				{ name: "Tortillas", amount: "4" },
				{ name: "Cheddar cheese", amount: "50g" },
				{ name: "Lettuce", amount: "1 cup" },
			],
			extraInfo: "Serve with lime wedges for a burst of freshness.",
			servingSize: 2,
			expectedTime: "20 minutes",
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[1],
		},
		{
			title: "Margherita Pizza",
			oneline: "Classic pizza with tomato, mozzarella, and basil.",
			description:
				"Margherita Pizza is a simple yet delicious dish that showcases the flavors of fresh tomatoes, mozzarella, and basil. It's a great way to enjoy a homemade pizza night.",
			steps: [
				"Roll out pizza dough and spread with tomato sauce.",
				"Top with mozzarella slices and fresh basil.",
				"Bake in a preheated oven at 220°C for 15 minutes.",
			],
			ingredients: [
				{ name: "Pizza dough", amount: "1 ball" },
				{ name: "Tomato sauce", amount: "100g" },
				{ name: "Mozzarella cheese", amount: "100g" },
				{ name: "Fresh basil", amount: "a handful" },
			],
			extraInfo: "Use a pizza stone for a crispier crust.",
			servingSize: 2,
			expectedTime: "30 minutes",
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		// Add more recipes as needed...
	];

	const recipes = [
		{
			title: "Chocolate Cake",
			oneline: "Rich and decadent chocolate cake.",
			description:
				"Indulge in this moist and chocolatey cake that's perfect for any occasion.",
			steps: [
				"Preheat oven to 350°F (175°C).",
				"Mix flour, cocoa powder, sugar, and baking soda.",
				"Add eggs, milk, and melted butter, then mix well.",
				"Pour batter into a greased cake pan and bake for 30 minutes.",
				"Let cool, then frost with chocolate frosting.",
			],
			ingredients: [
				{ name: "All-purpose flour", amount: "1 cup" },
				{ name: "Cocoa powder", amount: "1/2 cup" },
				{ name: "Sugar", amount: "1 cup" },
				{ name: "Baking soda", amount: "1 tsp" },
				{ name: "Eggs", amount: "2 large" },
				{ name: "Milk", amount: "1 cup" },
				{ name: "Butter, melted", amount: "1/2 cup" },
				{ name: "Chocolate frosting", amount: "as needed" },
			],
			extraInfo: "Decorate with chocolate shavings for an elegant touch.",
			servingSize: 8,
			expectedTime: "1 hour",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		{
			title: "Cheesecake",
			oneline: "Creamy and smooth cheesecake.",
			description:
				"Enjoy the rich and creamy texture of this classic cheesecake.",
			steps: [
				"Preheat oven to 325°F (160°C).",
				"Mix graham cracker crumbs, sugar, and melted butter.",
				"Press mixture into a springform pan to form crust.",
				"Beat cream cheese until smooth, then add sugar and vanilla.",
				"Add eggs one at a time, mixing well after each addition.",
				"Pour batter over crust and bake for 50-60 minutes.",
				"Let cool, then refrigerate before serving.",
			],
			ingredients: [
				{ name: "Graham cracker crumbs", amount: "1 1/2 cups" },
				{ name: "Sugar", amount: "1/4 cup" },
				{ name: "Butter, melted", amount: "1/3 cup" },
				{ name: "Cream cheese, softened", amount: "24 oz" },
				{ name: "Sugar", amount: "1 cup" },
				{ name: "Vanilla extract", amount: "1 tsp" },
				{ name: "Eggs", amount: "4 large" },
			],
			extraInfo: "Top with fresh berries or fruit compote.",
			servingSize: 10,
			expectedTime: "2 hours",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[1],
		},
		{
			title: "Apple Pie",
			oneline: "Traditional apple pie with flaky crust.",
			description:
				"Enjoy a slice of warm apple pie with a flaky, buttery crust and cinnamon-spiced apples.",
			steps: [
				"Preheat oven to 425°F (220°C).",
				"Prepare pie crust and place in pie dish.",
				"Mix sliced apples with sugar, cinnamon, and flour.",
				"Pour apple mixture into pie crust and dot with butter.",
				"Cover with top crust, seal edges, and cut slits in top.",
				"Bake for 45-50 minutes until crust is golden brown.",
			],
			ingredients: [
				{ name: "Pie crust", amount: "2 (9-inch)" },
				{ name: "Apples, peeled and sliced", amount: "6 cups" },
				{ name: "Sugar", amount: "3/4 cup" },
				{ name: "Cinnamon", amount: "1 tsp" },
				{ name: "All-purpose flour", amount: "2 tbsp" },
				{ name: "Butter", amount: "2 tbsp" },
			],
			extraInfo: "Serve warm with a scoop of vanilla ice cream.",
			servingSize: 8,
			expectedTime: "1 hour",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		{
			title: "Tiramisu",
			oneline:
				"Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
			description:
				"Enjoy the rich flavors of espresso and mascarpone in this decadent tiramisu.",
			steps: [
				"Brew strong coffee and let it cool.",
				"In a bowl, beat egg yolks and sugar until thick and pale.",
				"Add mascarpone cheese and mix until smooth.",
				"In a separate bowl, beat egg whites until stiff peaks form.",
				"Fold egg whites into mascarpone mixture.",
				"Quickly dip ladyfingers into coffee and layer in a dish.",
				"Spread half of the mascarpone mixture over the ladyfingers.",
				"Repeat layers, ending with mascarpone mixture.",
				"Refrigerate for at least 4 hours before serving.",
			],
			ingredients: [
				{ name: "Strong coffee, cooled", amount: "1 1/2 cups" },
				{ name: "Egg yolks", amount: "4 large" },
				{ name: "Sugar", amount: "1/2 cup" },
				{ name: "Mascarpone cheese", amount: "16 oz" },
				{ name: "Egg whites", amount: "4 large" },
				{ name: "Ladyfingers", amount: "24" },
				{ name: "Cocoa powder", amount: "2 tbsp" },
			],
			extraInfo: "Dust with cocoa powder before serving.",
			servingSize: 10,
			expectedTime: "2 hours",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[1],
		},
		{
			title: "Lemon Bars",
			oneline: "Zesty lemon bars with a buttery shortbread crust.",
			description:
				"Tangy lemon filling atop a buttery shortbread crust, dusted with powdered sugar.",
			steps: [
				"Preheat oven to 350°F (175°C).",
				"Mix flour, sugar, and salt, then cut in cold butter until crumbly.",
				"Press mixture into a greased baking dish and bake for 20 minutes.",
				"Mix eggs, sugar, lemon zest, and lemon juice until smooth.",
				"Pour lemon mixture over crust and bake for another 20-25 minutes.",
				"Let cool, then dust with powdered sugar before cutting into bars.",
			],
			ingredients: [
				{ name: "All-purpose flour", amount: "1 cup" },
				{ name: "Sugar", amount: "1/2 cup" },
				{ name: "Salt", amount: "1/4 tsp" },
				{ name: "Butter, cold and cubed", amount: "1/2 cup" },
				{ name: "Eggs", amount: "2 large" },
				{ name: "Sugar", amount: "1 cup" },
				{ name: "Lemon zest", amount: "2 tbsp" },
				{ name: "Fresh lemon juice", amount: "1/3 cup" },
				{ name: "Powdered sugar, for dusting", amount: "as needed" },
			],
			extraInfo: "Chill in the refrigerator before serving for easier slicing.",
			servingSize: 12,
			expectedTime: "1 hour",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		{
			title: "Panna Cotta",
			oneline: "Smooth and creamy Italian dessert.",
			description:
				"Enjoy the delicate flavors of vanilla and cream in this silky panna cotta.",
			steps: [
				"Bloom gelatin in cold milk for 5 minutes.",
				"In a saucepan, heat cream, sugar, and vanilla until steaming.",
				"Remove from heat and stir in gelatin mixture until dissolved.",
				"Pour into ramekins or molds and refrigerate for at least 4 hours.",
				"Serve chilled, topped with fresh berries or fruit compote.",
			],
			ingredients: [
				{ name: "Gelatin", amount: "1 packet" },
				{ name: "Cold milk", amount: "1/4 cup" },
				{ name: "Heavy cream", amount: "2 cups" },
				{ name: "Sugar", amount: "1/4 cup" },
				{ name: "Vanilla extract", amount: "1 tsp" },
			],
			extraInfo: "Lightly oil ramekins for easier unmolding.",
			servingSize: 6,
			expectedTime: "4 hours",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[1],
		},
		{
			title: "Fruit Tart",
			oneline: "Colorful fruit tart with a sweet pastry crust.",
			description:
				"Enjoy a slice of this beautiful fruit tart, filled with pastry cream and topped with fresh fruits.",
			steps: [
				"Preheat oven to 350°F (175°C).",
				"Mix flour, sugar, and salt, then cut in cold butter until crumbly.",
				"Press mixture into a tart pan and bake for 15-20 minutes, until golden brown.",
				"Let crust cool completely.",
				"Spread pastry cream over cooled crust.",
				"Arrange fresh fruits on top of pastry cream.",
				"Brush fruit with apricot glaze for shine.",
			],
			ingredients: [
				{ name: "All-purpose flour", amount: "1 1/2 cups" },
				{ name: "Sugar", amount: "1/2 cup" },
				{ name: "Salt", amount: "1/4 tsp" },
				{ name: "Butter, cold and cubed", amount: "1/2 cup" },
				{ name: "Pastry cream", amount: "2 cups" },
				{ name: "Assorted fresh fruits", amount: "as needed" },
				{ name: "Apricot preserves", amount: "1/4 cup" },
			],
			extraInfo: "Chill tart before serving for easier slicing.",
			servingSize: 8,
			expectedTime: "2 hours",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		{
			title: "Banana Bread",
			oneline: "Moist and flavorful banana bread.",
			description:
				"Enjoy a slice of warm banana bread with a hint of cinnamon and nuts.",
			steps: [
				"Preheat oven to 350°F (175°C).",
				"Mix flour, baking soda, salt, and cinnamon.",
				"In a separate bowl, cream butter and sugar, then add eggs and mashed bananas.",
				"Add dry ingredients to wet ingredients, then fold in nuts.",
				"Pour batter into a greased loaf pan and bake for 60-70 minutes.",
				"Let cool before slicing.",
			],
			ingredients: [
				{ name: "All-purpose flour", amount: "2 cups" },
				{ name: "Baking soda", amount: "1 tsp" },
				{ name: "Salt", amount: "1/2 tsp" },
				{ name: "Cinnamon", amount: "1 tsp" },
				{ name: "Butter, softened", amount: "1/2 cup" },
				{ name: "Sugar", amount: "3/4 cup" },
				{ name: "Eggs", amount: "2 large" },
				{ name: "Ripe bananas, mashed", amount: "3" },
				{ name: "Chopped nuts (optional)", amount: "1/2 cup" },
			],
			extraInfo: "Add chocolate chips for extra sweetness.",
			servingSize: 10,
			expectedTime: "1 hour 20 minutes",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[1],
		},
		{
			title: "Raspberry Sorbet",
			oneline: "Refreshing raspberry sorbet.",
			description: "Cool off with this fruity and refreshing raspberry sorbet.",
			steps: [
				"In a saucepan, heat sugar and water until sugar dissolves.",
				"Let syrup cool completely.",
				"In a blender, puree raspberries with syrup until smooth.",
				"Strain mixture to remove seeds, then chill in the refrigerator.",
				"Churn in an ice cream maker according to manufacturer's instructions.",
				"Transfer sorbet to a container and freeze until firm.",
			],
			ingredients: [
				{ name: "Sugar", amount: "1 cup" },
				{ name: "Water", amount: "1 cup" },
				{ name: "Fresh raspberries", amount: "4 cups" },
			],
			extraInfo: "Garnish with fresh mint leaves before serving.",
			servingSize: 6,
			expectedTime: "4 hours",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		{
			title: "Peach Cobbler",
			oneline: "Warm peach cobbler with a buttery biscuit topping.",
			description:
				"Enjoy the flavors of ripe peaches topped with a sweet biscuit crust.",
			steps: [
				"Preheat oven to 375°F (190°C).",
				"Mix sliced peaches with sugar, lemon juice, and cornstarch.",
				"Pour peach mixture into a baking dish.",
				"Mix flour, sugar, baking powder, and salt.",
				"Cut in cold butter until mixture resembles coarse crumbs.",
				"Add milk and stir until dough forms.",
				"Drop spoonfuls of dough over peach mixture.",
				"Bake for 35-40 minutes until topping is golden brown.",
			],
			ingredients: [
				{ name: "Ripe peaches, sliced", amount: "6 cups" },
				{ name: "Sugar", amount: "3/4 cup" },
				{ name: "Lemon juice", amount: "1 tbsp" },
				{ name: "Cornstarch", amount: "2 tbsp" },
				{ name: "All-purpose flour", amount: "1 cup" },
				{ name: "Sugar", amount: "2 tbsp" },
				{ name: "Baking powder", amount: "1 tsp" },
				{ name: "Salt", amount: "1/4 tsp" },
				{ name: "Butter, cold and cubed", amount: "1/4 cup" },
				{ name: "Milk", amount: "1/2 cup" },
			],
			extraInfo: "Serve warm with vanilla ice cream.",
			servingSize: 8,
			expectedTime: "1 hour",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[1],
		},
		{
			title: "Chocolate Mousse",
			oneline: "Silky smooth chocolate mousse.",
			description:
				"Savor the decadence of velvety chocolate mousse topped with whipped cream.",
			steps: [
				"Melt chocolate in a double boiler until smooth.",
				"Whisk egg yolks and sugar until pale and fluffy.",
				"Add melted chocolate and vanilla extract to egg mixture.",
				"In a separate bowl, whip cream until stiff peaks form.",
				"Fold whipped cream into chocolate mixture until well combined.",
				"Pour into serving glasses and chill for at least 2 hours.",
				"Top with whipped cream and chocolate shavings before serving.",
			],
			ingredients: [
				{ name: "Semisweet chocolate, chopped", amount: "6 oz" },
				{ name: "Egg yolks", amount: "4 large" },
				{ name: "Sugar", amount: "1/4 cup" },
				{ name: "Vanilla extract", amount: "1 tsp" },
				{ name: "Heavy cream", amount: "1 cup" },
				{ name: "Whipped cream, for topping", amount: "as needed" },
				{ name: "Chocolate shavings, for garnish", amount: "as needed" },
			],
			extraInfo:
				"Chill bowls and beaters before whipping cream for best results.",
			servingSize: 6,
			expectedTime: "2 hours",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		{
			title: "Creme Brulee",
			oneline: "Classic French dessert with a caramelized sugar crust.",
			description:
				"Indulge in the smooth custard topped with a crunchy layer of caramelized sugar.",
			steps: [
				"Preheat oven to 325°F (160°C).",
				"In a saucepan, heat cream, sugar, and vanilla until steaming.",
				"In a bowl, whisk egg yolks until smooth.",
				"Slowly pour hot cream mixture into egg yolks, whisking constantly.",
				"Strain mixture through a fine sieve.",
				"Pour custard into ramekins and place in a baking dish.",
				"Pour hot water into baking dish to halfway up the sides of ramekins.",
				"Bake for 40-45 minutes until custard is set but still jiggles slightly.",
				"Chill in refrigerator for at least 2 hours.",
				"Sprinkle sugar evenly over custard and caramelize with a kitchen torch or under broiler.",
			],
			ingredients: [
				{ name: "Heavy cream", amount: "2 cups" },
				{ name: "Sugar", amount: "1/2 cup" },
				{ name: "Vanilla extract", amount: "1 tsp" },
				{ name: "Egg yolks", amount: "6 large" },
				{ name: "Granulated sugar, for caramelizing", amount: "as needed" },
			],
			extraInfo: "Caramelize sugar just before serving for best texture.",
			servingSize: 6,
			expectedTime: "3 hours",
			category: "Dessert",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[1],
		},
	];

	// Insert recipes into the database
	for (const recipe of recipes) {
		await prisma.recipe.create({
			data: {
				title: recipe.title,
				oneline: recipe.oneline,
				description: recipe.description,
				steps: recipe.steps,
				ingredients: {
					create: recipe.ingredients,
				},
				extraInfo: recipe.extraInfo,
				servingSize: recipe.servingSize,
				expectedTime: recipe.expectedTime,
				category: recipe.category,
				imageUrl: recipe.imageUrl,
				userId: recipe.userId,
			},
		});
	}

	console.log("Inserted 30 dummy recipes successfully");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
