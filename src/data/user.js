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
		title: "안녕하세요, 정원담입니다.",
		description:
			"2015년 미국인턴을 시작으로 미국 내 이커머스 시장에 대한 이해와 함께 개발을 시작했습니다. 2020년부터 한국에서 빅데이터 시각화팀의 프론트엔드 개발을 시작으로 현재는 스타트업에서 자동화 배너 제작 서비스 팀의 Editor 개발 및 배너 제작 / 렌더링에 모든 부분에 참여 하고 있습니다. 개발자로서의 성장뿐만 아니라 저 개인을 위해서도 항상 새로운 기회를 찾고 도전하는 것을 좋아합니다.",
	},

	about: {
		title: "안녕하세요, 정원담입니다. 서울, 한국에서 거주하고 있습니다.",
		description:
			"안녕하세요! 저는 웹개발자 정원담입니다. 여행과 일은 제가 열정적인 것들 중에 하나입니다. 지구 여행을 하면서 나와 다른 삶에 대해서 이해하고 또 제가 가진것들의 소중함도 느낍니다. 일 끝나고는 집에서 공부하거나 쉬는 거나 스쿼시하면서 운동하는것을 좋아합니다. 앞으로는 더 많은 사람들과 함께 일하면서 배우고 성장하고 싶습니다. 저는 한 가지 일에만 집중하는 것도 중요하지만, 전체적인 시야를 가지고 두루두루 잘 바라보는 것도 중요하다고 생각합니다. 인공지능이 발전하면서 이러한 능력은 더욱 중요해질 것이라고 생각하며, 미래는 어떻게 바뀔지 모르지만, 항상 변화에 적응하고 발전할 수 있는 능력을 기르는 것이 중요하다고 믿습니다.",
	},

	articles: {
		title: "프로젝트 회고...",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},
	technology: {
		title: "기술 스택",
		description:"대시보드 개발부터 에디터 개발 까지 프론트 엔드 개발 경험이 더 많지만 현 회사에서 백엔드도 틈틈히 하고있고 MSA 와 백엔드 전체적인 아키텍쳐를 파악을 위해 공부 중에 있습니다.",
		fonrtend:[{
			title: "Typescript / Javascript / JQuery",
			description: "any로 박지 않고 타입 명확하게 지정하여 코드도 명확해 지게 합니다. jQuery 는 현재는 거의 쓰지 않지만 이전 회사에서 자주 썼었습니다.",
			maturity: "90%"
		},
		{
			title: "Vue.js, React.js, Svelte.js",
			description: "현 회사에서는 React로 개발 중이며 이전 회사 대시보드를 만들때는 React 와 Vue, Svelte 를 사용했습니다. 상태관리는 vuex, zustand.",
			maturity: "React는 90%, 나머지는 쓰지 않은지 좀 오래 되어서 최근의 내용까진 모르지만 무엇이든지 찾아보면서 개발 가능합니다."
		},
		{
			title: "Html, SCSS/SASS, Tailwind, Element ui, Pal.js, MUI",
			description: "현 회사는 MUI를 사용하고 있습니다. 기술된 내용을 모두 써보았고 문서보면서 개발 합니다.",
			maturity: "90%"
		},
		{
			title: "Webpack, vite",
			description: "두 가지 환경에서 빌드 해보았습니다.",
			maturity: "70%"
		}],
		backend:[{
			title: "JAVA, Spring boot",
			description: "현 회사에서 JAVA, Spring boot를 사용 중입니다. 백엔드 개발을 이 언어와 프레임워크로 가장 많이 해 보았습니다. Security, Spring Cloud 공부 중에 있습니다.",
			maturity: "70%"
		},
		{
			title: "Kotlin, Node.js,",
			description: "node.js 로 간단한 api 서버 개발 해보고, kotlin으로 개발한 환경애서 Raw Query 을 작성하여 대량의 데이터를 처리한 경험이 있습니다. 부분적으로만 개발 한것이기 떄문에 언어에 대한 익숙도는 상대적으로 낮을 수 있습니다.",
			maturity: "50%"
		},
		{
			title: "Database",
			description: "mysql 사용 중 이며 비슷한 계열로 maria db 를 이전 회사에서 사용해 본 경험이 있습니다. JPA 같은 ORM도 같이 사용 중입니다.",
			maturity: "50%"
		},
		],
		cicd:[{
			title: "Jenkins, Gihub Action",
			description:"현 회사에서 Github Action 사용, 이전 회사에서 Jenkins 사용. 배포 파이프라인은 직접 구축한것이 아님.",
			maturity: "60%"
		}],
		etc:[{
			title: "한국어와 영어",
			description:"한국어와 영어 사용 가능합니다.",
			maturity: "영어 70%, 영어로 의사소통 가능."
		}]
	},
	project: {
		title:"2016년부터 지금까지...",
		description: "정말 아무것도 몰랐습니다. 특히 첫 회사가 미국 회사였다는 점, 전공도 컴퓨터이고 코드 비슷한것은 맞지긴 하나 내가 개발자인가 무엇인가 혼란이 있었던 시기였고 개발 더 배우기엔 인턴십을 시작한 회사에선 불가능 하다 생각하였습니다. 이런 이유로 한국으로 다시 돌아와 실력있는 사수들을 만나서 경험하고 덕분에 많이 성장 하였다고 생각합니다. javascript 개발부터 컴포넌트 개발 그렇게 쓰고 싶었던 프론트엔드 프레임웍까지, 이걸 경험하다보니 백엔드는 어떻게 돌아가는지 전체적인 데이터가 어떻게 흘러가서 처리하는지 궁금하였고 풀스택이라는 영역 까지 넘어오게 되었습니다. 저는 아직도 많이 배워야 하고 부족하다고 생각하지만 10년이 지나도 제가 똑같이 부족하다 생각할것이기 때문에 항상 배우고자하는 태도로 제 일을 바라보려고 합니다. 저와 다른 분야의 사람의 이야기, 그리고 페어 프로그래밍 코드리뷰도 좋아합니다.",
	},
	projects: [
		{
			title: "vcat 배너 커스텀 사이즈 기능 개발(2023)",
			description:
				"사용자가 입력한 width * height 로 배너이미지가 생성(Resize) 될 수 있게 개발 중 입니다. Front 는 React와 zustand, Backend는 Java, Spring boot 입니다.",
			logo: "./pion.png",
			linkText: "View Project",
			link: "https://vcat.ai/",
		},
		{
			title: "vcat 배너 제작 서비스 Editor 개발(2023)",
			description:
				"초반에 사수님이 셋업해주신 POC로 시작. 이후에 다시 React와 zustand, 에디터 메인이되는 daybrush 라는 라이브러리를 통해서 주도적으로 개발 하였습니다.",
			logo: "./pion.png",
			linkText: "View Project",
			link: "https://vcat.ai/",
		},
		{
			title: "vcat 배너 템플릿 관리(2022/2023)",
			description:
				"배너 템플릿 등록 및 관리하는 어드민 Front/Backend 개발. 뿐만 아니라 vcat 기능 업데이트 이후 admin 도 이에 맞게 업데이트 하는 일을 하였습니다.",
			logo: "./pion.png",
			linkText: "View Project",
			link: "https://record.vcat.ai/login",
		},
		{
			title: "Nielsen(닐슨) 시각화 대시보드 개발 (2021, 2022)",
			description:
				"빅데이터를 시각화하여 구현하는, 닐슨 기업용 대시보드 개발 프로젝트에 참여했습니다. Front는 React, zustand, SWR, Typescript 으로 개발 하였고 Backend는 코틀린, 스프링, mysql 으로 개발하였습니다. ",
			logo: "./surmmerce.png",
			linkText: "View Project",
			link: "https://accelerator-ph.etrendview.com/auth/login",
		},

		{
			title: "TrendView 대시보드 플랫폼 개발(2020)",
			description:
				"시각화 대시보드 플랫폼입니다. JSON 데이터를 어떻게 구성하느냐에 따라 화면의 테마, 필터의 구조, 차트의 구조가 달라집니다. Front 개발을 위주로 Vue.js, vuex, Typescript를 사용하였습니다.",
			logo: "./surmmerce.png",
			linkText: "View Project",
			link: "https://nielsen_nebula.marketingtool.co.kr/login",
		},
		{
			title: "TrendView 대시보드 어드민 개발(2021)",
			description:
				"트렌드뷰 대시보드 플랫폼 관리자를 위한 에디팅 서비스입니다. 관리자는 개발자의 도움없이 어드민 화면을 통해 필터, 차트, 권한설정 등 전반적인 수정을 할 수 있습니다.",
			logo: "./surmmerce.png",
			linkText: "View Project",
			link: "https://trendview.kr/trendview/",
		},
		{
			title: "커스텀 골프 클럽 개발(2019)",
			description:
				"쇼핑몰에 제한된 스큐와 제한된 옵션으로만 리스팅 할 수 있어 좀 더 여러개의 옵션과 여러 스큐를 제공하기 위한 기능이 필요하였습니다. 이에 골프 클럽을 손님 요구에 맞게 여러가지 옵션을 넣을수 있게하고 선택한 옵션에 따른 클럽을 시각화하여 보여줄수 있게 개발. Jquery, Node.js, API는 헤로쿠로 배포 하였습니다.",
			logo: "./golfio.png",
			linkText: "View Project",
			link: "https://www.golfio.com/custom/",
		},
		{
			title: "Samsungpart 개발 (2018)",
			description:
				"부품의 전체 파일은 SVG파일로 사용해 이미지 파일을 드래그할수있는 기능과 ZOOM IN, ZOOM OUT 등, 사용자와의 상호작용 요소들을 개발 하였습니다.",
			logo: "./golfio.png",
			linkText: "View Project",
			link: "https://samsungparts.com/",
		},
		{
			title: "golfio.com 사이트 개발, 유지 보수 및 책임(2015,2019)",
			description:
				"인턴으로 시작해 해당 사이트 전체 책임자로서 페이지 퍼블리싱(리뉴얼), 필요한 UI 개발부터, 기능구현 담당",
			logo: "./golfio.png",
			linkText: "View Project",
			link: "https://www.golfio.com/",
		},
	],
};

export default INFO;
