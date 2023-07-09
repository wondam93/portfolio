const INFO = {
	main: {
		title: "Portfolio by wondam",
		name: "Wondam Jung",
		email: "wondam93@gmail.com",
		logo: "../loopy.jpeg",
	},

	socials: {
		// twitter: "https://twitter.com/",
		github: "https://github.com/wondam93",
		linkedin: "https://www.linkedin.com/in/wondam-jung-06b9a2a8/",
		// instagram: "https://instagram.com/",
		// stackoverflow: "https://stackoverflow.com/",
		// facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Hello, My name is Wondam.",
		description:
			"I started developing with an understanding of the US e-commerce market, beginning with an American internship in 2015. From 2020, I started developing for the front-end of a big data visualization team in Korea, and now I participate in all aspects of developing and rendering banners, as well as developing editors for an automated banner production service at a startup. I not only strive for growth as a developer, but I also love seeking out new opportunities and challenges for myself.",
	},

	about: {
		title: "Hello, I am Wondam Jung. I live in Seoul, South Korea.",
		description:
			"Hello! I'm web developer Wondam Jung. Traveling and work are among my passions. Traveling around the world allows me to understand different lifestyles and appreciate the value of what I have. After work, I enjoy studying or relaxing at home, and I also love playing squash for exercise. Moving forward, I aspire to work with more people, learn, and grow together. I believe that while it's important to focus on one thing, it's equally important to have a broad perspective and see things from different angles. With the advancement of artificial intelligence, I believe these skills will become even more crucial. Although we cannot predict how the future will change, I believe it's important to cultivate the ability to adapt and thrive in the face of change.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},
	technology: {
		title: "Technology Stack",
		description:"I have more experience in front-end development, ranging from dashboard development to editor development. However, at my current company, I also work on backend development and study to understand MSA and the overall backend architecture.",
		fonrtend:[{
			title: "Typescript / Javascript / JQuery",
			description: "I specify types clearly without relying on 'any' in order to make the code more explicit. Although I rarely use jQuery now, I used it frequently at my previous company.",
			maturity: "90%"
		},
		{
			title: "Vue.js, React.js, Svelte.js",
			description: "At my current company, I am developing with React. In my previous company, when creating dashboards, I used React, Vue, and Svelte. For state management, I used Vuex and Zustand.",
			maturity: "90% experienced in React. As for Vue.js and Svelte.js. However, I can still develop using those frameworks by searching through the doc."
		},
		{
			title: "Html, SCSS/SASS, Tailwind, Element ui, Pal.js, MUI",
			description: "At my current company, we use MUI (Material-UI). I have hands-on experience with all the features it offers, and I rely on the documentation to guide me during development.",
			maturity: "90%"
		},
		{
			title: "Webpack, vite",
			description: "I have built in two different environments.",
			maturity: "70%"
		}],
		backend:[{
			title: "JAVA, Spring boot",
			description: "At my current company, we use JAVA and Spring Boot for backend development. I have gained extensive experience in developing backend applications using this language and framework. Currently, I am studying Security and Spring Cloud to further enhance my skills.",
			maturity: "70%"
		},
		{
			title: "Kotlin, Node.js,",
			description: "I have experience developing a simple API server using Node.js, and I have also written Raw Queries to process large amounts of data in an environment developed using Kotlin. However, since I only worked on these projects partially, my familiarity with these languages may not be as high compared to other languages such as JAVA.",
			maturity: "50%"
		},
		{
			title: "Database",
			description: "I am currently using MySQL, and I have previous experience using MariaDB, which is a similar type of database, at a previous company. Additionally, I am also using ORM (Object-Relational Mapping) tools such as JPA (Java Persistence API) to facilitate database operations.",
			maturity: "70%"
		},
		],
		cicd:[{
			title: "Jenkins, Gihub Action",
			description:"At my current company, we use Github Actions for our deployment pipeline. In my previous job, we used Jenkins for our deployment pipeline. However, I did not directly build the deployment pipeline in either company, as it was already established beforehand.",
			maturity: "60%"
		}],
		etc:[{
			title: "Korean and English",
			description:"Feel free to communicate with me in either language.",
			maturity: "I am capable of using English, but I am not that fluent like a native speaker. "
		}]
	},
	project: {
		title:"From 2016 until now..",
		description: "From 2016 until now, when I knew nothing at all. Considering the fact that my first job was at an American company, and my major was computer science with some knowledge of coding, I was confused about whether I was truly a developer or not. At the time, I thought it would be impossible to learn more development skills at the company where I started my internship. For these reasons, I returned to Korea and had the opportunity to meet experienced mentors. Thanks to them, I was able to gain a lot of growth and experience. From JavaScript development to component development and the frontend frameworks I wanted to use, as I gained experience in these areas, I became curious about how the backend works and how data flows and is processed in the overall system. This led me to transition into the full-stack domain. I still have a lot to learn and I believe I have many shortcomings, but even after 10 years, I would be the same, I would still have shortcomings in terms of developement with something. Therefore, I always approach my work with a desire to learn. I enjoy hearing stories from people in different fields and engaging in pair programming and code reviews.",
	},
	projects: [
		{
			title: "Development of custom size feature for vcat banners (2023)",
			description:
				"We are currently developing a feature where the banner image can be generated (resized) based on the width and height input by the user. The frontend is being developed using React and Zustand, while the backend is being developed using Java and Spring Boot.",
			logo: "./pion.png",
			linkText: "View Project",
			link: "https://vcat.ai/",
		},
		{
			title: "Development of the vcat banner production service Editor (2023)",
			description:
				"We initially started with a Proof of Concept (POC) set up by my mentor, and then I took the lead in development using React, Zustand, and a library called daybrush, which serves as the main editor for our project.",
			logo: "./pion.png",
			linkText: "View Project",
			link: "https://vcat.ai/",
		},
		{
			title: "Development of vcat banner template management feature (2022/2023)",
			description:
				"I developed the frontend and backend for the admin page which registers and manages banner templates. In addition, after updating the vcat functionality, we also updated the admin page to match the changes.",
			logo: "./pion.png",
			linkText: "View Project",
			link: "https://record.vcat.ai/login",
		},
		{
			title: "Development of Nielsen visualization dashboard (2021, 2022)",
			description:
				"I participated in the development of a Nielsen enterprise dashboard project that visualizes big data. The frontend was developed using React, Zustand, SWR, and TypeScript, while the backend was developed using Kotlin, Spring, and MySQL.",
			logo: "./surmmerce.png",
			linkText: "View Project",
			link: "https://accelerator-ph.etrendview.com/auth/login",
		},

		{
			title: "Development of TrendView dashboard platform (2020)",
			description:
				"It's a visualization dashboard platform where the theme, filter structure, and chart structure of the screen differ depending on how the JSON data is structured. We mainly developed the frontend using Vue.js, Vuex, and TypeScript.",
			logo: "./surmmerce.png",
			linkText: "View Project",
			link: "https://nielsen_nebula.marketingtool.co.kr/login",
		},
		{
			title: "Development of TrendView dashboard admin (2021)",
			description:
				"It's an editing service for the TrendView dashboard platform administrator. The administrator can make overall modifications to filters, charts, and permissions through the admin screen without the help of a developer.",
			logo: "./surmmerce.png",
			linkText: "View Project",
			link: "https://trendview.kr/trendview/",
		},
		{
			title: "Development of custom golf club (2019)",
			description:
				"We needed a feature to provide more options and multiple SKUs for customers, as we were limited to listing products with restricted SKUs and options on the shopping mall. We developed the custom golf club to allow various options to be added according to the customer's requirements and to visually show the clubs based on the selected options. The technology stack used was jQuery, Node.js, and API deployed on Heroku.",
			logo: "./golfio.png",
			linkText: "View Project",
			link: "https://www.golfio.com/custom/",
		},
		{
			title: "Development of Samsungpart (2018)",
			description:
				"I developed Samsungpart in 2018 partially, which utilized SVG files for the entire parts. It had interactive features such as the ability to drag and drop image files and zoom in/out functions to enhance user interaction.",
			logo: "./golfio.png",
			linkText: "View Project",
			link: "https://samsungparts.com/",
		},
		{
			title: "Development, maintenance, and responsibility of golfio.com website (2015, 2019)",
			description:
				"As an intern, I started working on the website and eventually became the person in charge of the entire golfio.com website. My responsibilities included page publishing (renewal), UI development, and function implementation.",
			logo: "./golfio.png",
			linkText: "View Project",
			link: "https://www.golfio.com/",
		},
	],
};

export default INFO;
