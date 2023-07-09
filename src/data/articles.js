import React from "react";

function article_1() {
	return {
		date: "2020-2022",
		title: "Builton, Project 회고 ",
		description:
			"2022년부터 2022까지 Summerce Platform(Builton)에서 해왔던 프로젝트에 대한 회고이다. javascript 로만 개발하다 프론트엔드 프레임워크를 사용해 재미있게 경험하였고 무엇보다 빅데이터 기업이다 보니 수많은 데이터를 쿼리해볼 수 있는 기회를 가질 수 있었다. sql 로 요구사항에 맞는 쿼리를 작성하고 api 를 개발한 후 차트에 보여주는것 까지 작업하였다.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
			
					.tag {
						font-size: 13px;
						background: greenyellow;
						border-radius: 10px;
						padding: 2px 4px 2px 4px;
						margin-right: 5px;
						margin-left: 5px;
					}
					strong {
					    font-size: 20px;
   						margin-bottom: 5px;
    					margin-top: 20px;
    					display: inline-block;
					}
					.paragraph {
						font-size:14px;
						line-height:20px;
					}
					ul {
						font-size:14px;
					}
					img {
						width:800px;
					}
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<strong>#1 Vue.js! 데이터에 의해서 화면/필터/옵션이 만들어지 대시보드 개발!</strong>
					<span className="tag">Vue.js</span>
					<span className="tag">Vuex</span>
					<div className="subtitle">내용과 목적</div>
					<ul>
						<li>
						레이아웃 부터, 데이터 셋이, 필터, 디자인, 차트의 옵션은 어떻게 들어갈지 모든것이 옵션으로 들어간다.
						</li>
						<li>
							JSON 데이터를 바탕으로 대시보드 전체가 그려지게 된다. 옵션에 따라서 클라이언트의 요구에 맞는 대시보드 화면이 개발 가능하다. 대시 보드 하나에 JSON 만 필요하면 됬으므로 개발 공수가 크게 줄어들기 위한 목적이였음.
						</li>
						<li>
							회사 자체 플랫폼 개발 이였음
						</li>
					</ul>
					<div className="subtitle">역할과 사용언어</div>
					<ul>
						<li>Frontend: 차트 개발, 컴포넌트 개발, theme 작업, 상태관리</li>
						<li>언어: Vue.js, Typescript, Element Ui, Echart.js</li>
					</ul>
					<div className="subtitle">특이점</div>
					<ul>
						<li>당시 타입스크립트를 처음 사용해 봤던 프로젝트이기도 하였고 제이쿼리와 자바스크립트로만 프론트 개발 해왔던 나에게 vue.js로 무언가 개발할 수 있다는 생각에 소원성취.</li>
						<li>그리고 css 는 tailwind 랑 전반적인 마크업 구조는 element ui 로 뚝딱 개발 했었던 것 같다.</li>
					</ul>
					<img src="../nebula5.png"/>
					<img src="../nebula.png"/>
				</div>
				<div className="article-content">
					<strong>#2 svelte.js! 어드민 화면 개발하기!</strong>
					<span className="tag">Svelte.js</span>
					{/* <span className="tag">Vuex</span> */}
					<div className="subtitle">내용과 목적</div>
					<ul>
						<li>
						위의 첫번쨰 프로젝트를 위한 어드민 개발 프로젝트
						</li>
						<li>
						기존 프로젝트 자체가 옵션 덩어리이기 떄문에 옵션의 depth 도 많으면 5 depth 까지 들어갔고 우리는 이것을 대부분 모달로 처리 한점이 아쉬운 점이다.
						</li>
					</ul>
					<div className="subtitle">역할과 사용언어</div>
					<ul>
						<li>Frontend: electron 을 기반으로 만들어 지고, 그 위에서 화면과 따른 상태관리 로직등을 개발.</li>
						<li>언어: Vue.js, Typescript, Element Ui, Echart.js</li>
					</ul>
					<div className="subtitle">특이점</div>
					<ul>
						<li>svelte.js로 진행. 이유는 당시 요즘 조금 핫한것 같다 라는 호기심에서다.</li>
						<li>react 보다 vue 보다 더 직관적이고 react 처럼 reducer, redux 를 활용해 상태관리를 복잡하게 하지않아도 좋았지만 제일 힘들었던것은 아직 svelte 사용자가 많지 않기 때문에 레퍼런스가 부족했었던 점. snowpack 으로 빌드할때 사수님이 좀 고생 하셨다</li>
					</ul>
					<img src="../admin_modal.png"/>

				</div>
				<div className="article-content">
					<strong>#3 react.js! 닐슨 대시보드 개발 SI성 프로젝트! (백엔드개발 시작!)</strong>
					<span className="tag">React.js</span>
					<span className="tag">Zustand</span>
					<div className="subtitle">내용과 목적</div>
					<ul>
						<li>
						기존에 만들었었던 프로젝트(플랫폼)에 맞지않는 요구사항이 있었기 때문에  SI성 프로젝트로 간주 하고 시작
						</li>
						<li>
						화면을 보면 이전 프로젝트와 생김새는 상당히 비슷하다. 차트 라이브러리는 이전처럼 echart 를 쓰고 똑같은 대시보드이기 때문에 크게 달라진것은 없어보이지만 이 프로젝트는 react 로 진행 되었다.
						</li>
					</ul>
					<div className="subtitle">역할과 사용언어</div>
					<ul>
						<li>Frontend: react 을 기반으로 만들어 지고, 사수님이 셋업해주시고 이후 프론트는 메인으로 주도 개발. 대부분 모든 영역 커버.</li>
						<li>언어: React.js, Typescript, Echart.js</li>
						<li>Backend: sql을 짜고 코틀린을 활용해 api 개발.</li>
						<li>언어: Mysql, Spring boot, Kotlin</li>
					</ul>
					<div className="subtitle">특이점</div>
					<ul>
						<li>zustand 를 사용. Redux 보다 훨씬 직관적이라 이해도 쉽고 코드도 간결해짐을 경험 하였다.</li>
						<li>swr을 사용하여 서버쪽에 요청을 전송하고 받았다. 리액트에서 훅을 사용하는것처럼 사용했고 무엇보다 swr 에서 이미 요청한 데이터에서는 새로운 요청을 보내지않아(캐싱) 반응속도의 향상에도 도움이 되었다.</li>
						<li>vue 에서는 중복을 제거하기 위해 mixin 을 많이 사용했었고 react 에서 중복을 제거하기위해 훅을 만들어 사용하였다.</li>
						<li>필터를 미리 조회하면 조회된 정보는 모두 로컬 스토리지에 저장이 되어 조회 하기전에는 빈 화면 이지만 조회 후에는 로컬 스토리지에서 정보를 빼내와 보여준다.</li>
					</ul>
					<img src="../trendview_overview.png"/>
					<img src="../trendview_performance.png"/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2015-2029",
		title: "Golfio Inc, Project 회고",
		description:
			"첫 직장 생활은 미국에서 시작하였다. 인턴십이였지만 기회가 좋아 생각 보다 더 오래 있을 수 있었다. 미국에대한 e-commerce 에 대한 이해를 바탕으로 사이트 개발 및 관리를 하였는데, 개발일 만 한다기 보단 회사가 수익을 어떻게 창출해 내는지 더 넓게 보려고 했다. 좋은 사람도 많이 만나고, 미국에서 많이 놀고..",
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
			
					.tag {
						font-size: 13px;
						background: greenyellow;
						border-radius: 10px;
						padding: 2px 4px 2px 4px;
						margin-right: 5px;
						margin-left: 5px;
					}
					strong {
					    font-size: 20px;
   						margin-bottom: 5px;
    					margin-top: 20px;
    					display: inline-block;
					}
					.paragraph {
						font-size:14px;
						line-height:20px;
					}
					ul {
						font-size:14px;
					}
					img {
						width:800px;
					}
					video {
						margin:0 auto;
						display:block;
					}
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<strong>#1 Custom 상품 서비스 개발! 진짜로 대박친 서비스!</strong>
					<span className="tag">javascript</span>
					<span className="tag">jQuery</span>
					<span className="tag">node.js</span>
					<div className="subtitle">내용과 목적</div>
					<ul>
						<li>
						손님은 1) 본인이 원하는 특별한 스킨을 입히거나 2) 본인의 원하는 사진을 올리거나 3) 본인이 원하는 텍스트 등을 넣거나, 커스텀 할 수 있다.
						</li>
						<li>
						결과적으로도 이 기능/서비스는 다른채널(아마존, 이베이)과는 차별화된 서비스로서 우리 사이트만의 특별한 옵션으로 전체 매출의 절반이상으로 톡톡한 매출 효과를 불러옴.
						</li>
					
					</ul>
					<div className="subtitle">역할과 사용언어</div>
					<ul>
						<li>Frontend: 화면 개발</li>
						<li>언어: javascript, jQuery</li>
						<li>Backend: api 개발</li>
						<li>언어: node.js</li>
					</ul>
					<div className="subtitle">특이점</div>
					<ul>
						<li>커스텀 옵션부터 그 옵션에 대한 시각화 그리고 기본요금에 더 추가해서 장바구니에 보내고 결제되는것 까지, api 개발 자체도 처음이지만 백엔드 개발의 매력을 느낄 수 있었다.</li>
					</ul>
					<video width="480" height="340" controls>
  						<source src="../cleveland.mp4" type="video/mp4"/>
					</video>
					<video width="480" height="340" controls>
  						<source src="../icon-custom.mp4" type="video/mp4"/>
					</video>
					
				</div>
				<div className="article-content">
					<strong>#2 Site 전체 리뉴얼! 기본! 기본! 기본기에 충실하자!</strong>
					<span className="tag">javascript</span>
					<span className="tag">jQuery</span>
					<div className="subtitle">내용과 목적</div>
					<ul>
						<li>
						사이트 리뉴얼은 변화하는 트렌드에 맞게 일년에 한번씩 했던 것 같다. 총 두번의 리뉴얼 프로젝트에 참여.
						</li>
			
					</ul>
					<div className="subtitle">역할과 사용언어</div>
					<ul>
						<li>Frontend: 화면 개발</li>
						<li>언어: javascript, jQuery</li>
					</ul>
					<div className="subtitle">특이점</div>
					<ul>
						<li>사이트 앞단 퍼블리싱은 어려운일은 아니었다. 한국과는 다르게 미국에서는 사용자의 대부분이 구글 organic search 의 비중이 높아서 SEO 최적화에 맞춘 퍼블리싱을 하였다. 때문에 정말 쉽지만 기본적인 것들을 지키려 노력 했었던것 같다. 예를들면 이미지 태그에 alt 를 넣거나 정말 기본적인거지만 귀찮아서 넣지 않는 것들, 웹표준, 그야말로 표준을 지켜야 반이상을 먹고 들어간다는걸 알았기 때문이다.</li>
					</ul>
					<img src="../golfio-blueprint.png"/>
					<img src="../golfio-stencil.png"/>
				</div>
				<div className="article-content">
					<strong>#3 삼성 파트</strong>
					<span className="tag">jQuery</span>
					<div className="subtitle">내용과 목적</div>
					<ul>
						<li>
						업체에서 준건 부품의 svg 파일들이 였고 부품들의 줌인 줌아웃 클릭등 다양한 이벤트들을 결합시켜서 사용자와의 상호작용을 강화하고 결과적으로 부품을 구매할 수 있는 링크로 연결해주게 하는게 작업
						</li>
					</ul>
					<div className="subtitle">역할과 사용언어</div>
					<ul>
						<li>Frontend: javascript 메인으로 주도 개발. 대부분 모든 영역 커버.</li>
					</ul>
					<video width="480" height="340" controls>
  						<source src="../samsungpart_desktop.mp4" type="video/mp4"/>
					</video>
				</div>
				<div className="article-content">
					<strong>#3 개발 말고도 시스템 관리자로서 이런일도..</strong>
					<span className="tag">우리 이메일 스팸으로 등록되게하지 말아주세요</span>
					<div className="subtitle">내용과 목적</div>
					<ul>
						<li>
						golfio.com 의 도메인이 뉴스레터를 보낼때 마다 스팸으로 등록되기 때문에 스팸으로부터 탈출하기 위한 과정.
						</li>
						<li>제일 큰 문제의 시작점은 구독을 요청한 손님에게만 뉴스레터를 보내야 하는데 구독하지 않는 list 를 “사와서” Newsletter를 보내기 시작했기 때문</li>
					</ul>
					<div className="subtitle">어떻게?</div>
					<ul>
						<li>spam 관리/모니터링을 위해서 glock app을 사용하였는데 mailchimp 와 연동되며 ESP마다 inbox 도달율을 확인할 수 있다.</li>
						<li>Bounce Rate 을 최대한줄이기 위해서 zerobounce 사용하였다. zerobounce는 우리가 가지고 있는 email list 를 validation해주는 사이트이다. 실제 존재 하는 이메일인 인지 확인해주고 spammy 한 email list는 걸러준다. 실제 우리의 이메일 리스트를 검증한 결과인데 약 100,000의 리스트에서 약 70,000 의 유효한 리스트로 줄어들였다. 아래 Spam Trap 이란 특정 이메일 주소를 말하는데 이 이메일 주소로 뉴스레터를 보내면 말그대로 우리는 트랩에 걸려 스팸으로 등록될 것 이다. 잘못 사온 리스트에는 이러한 spammy한 email 이 있을 수 있기 떄문에 반드시 먼저 걸러주어야한다.</li>
					<li>..방법이야 너무 많았지만 결과적으로 뉴스레터도 재정비하고 list 를 최대한 분할해서 보내서 open rate 을 올려보려고 했었다. </li>
					</ul>
					<div className="subtitle">최적화 전</div>
					<img src="../spam_middle.png"/>
					<div className="subtitle">최적화 후</div>
					<img src="../spam_sucess.png"/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
