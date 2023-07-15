const SHOP_LIST = [
  {
    name: '동지프룻 성주 상주 고당도 못난이 꿀참외',
    price: '24,900원',
    mall: '동지프룻',
    productLink:
      'https://smartstore.naver.com/fresh_dongji_fruits/products/8640636376?n_media=11068&n_query=%EB%AA%BB%EB%82%9C%EC%9D%B4%EB%86%8D%EC%82%B0%EB%AC%BC&n_rank=1&n_ad_group=grp-a001-02-000000035940192&n_ad=nad-a001-02-000000253359986&n_campaign_type=2&n_mall_id=ncp_1okfzm_01&n_mall_pid=8640636376&n_ad_group_type=2&NaPm=ct%3Dlk2m7x00%7Cci%3D0A80002whp5yYAflHv0P%7Ctr%3Dpla%7Chk%3D199f64074208fc9a8df7b5bce035fa9c968b8feb',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8618513/86185136699.jpg?type=f140',
  },
  {
    name: '노란 주황 빨간 파프리카 못난이 2kg 5kg',
    price: '5,900원',
    mall: '정든농산',
    productLink:
      'https://smartstore.naver.com/farm3594/products/6073388043?n_media=11068&n_query=%EB%AA%BB%EB%82%9C%EC%9D%B4%EB%86%8D%EC%82%B0%EB%AC%BC&n_rank=3&n_ad_group=grp-a001-02-000000036025934&n_ad=nad-a001-02-000000253882431&n_campaign_type=2&n_mall_id=ncp_1o482f_01&n_mall_pid=6073388043&n_ad_group_type=2&NaPm=ct%3Dlk2memig%7Cci%3D0zu0003phF5yL%2Dc9luYz%7Ctr%3Dpla%7Chk%3D88670550117822052f09d9d11d61e08212281d3e',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8361788/83617887531.2.jpg?type=f140',
  },
  {
    name: '완숙 찰 토마토 5kg 10kg 주스용 쥬스용 못난이',
    price: '12,900원',
    mall: '푸드맛킹',
    productLink:
      'https://smartstore.naver.com/thefarm_/products/5662367023?NaPm=ct%3Dlk2mpmcg%7Cci%3Dcf7ec212f7074d182a0e0e5f2bb31d5b0b8e8d10%7Ctr%3Dslsl%7Csn%3D3854438%7Chk%3D59be6d7520dcfaa4b3d2063935eabb741dd6483f',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8320686/83206864361.5.jpg?type=f140',
  },
  {
    name: '부사 사과 늘품 경북 가정용 못난이 흠집 꿀사과 3kg 5kg 10kg',
    price: '22,900원',
    mall: '늘품농업회사법인',
    productLink:
      'https://smartstore.naver.com/neulpum67?NaPm=ct%3Dlk2mxfjy%7Cci%3Dshopn%7Ctr%3Dslsl%7Chk%3D5ff37205473b682dd205b614a776ed8d825a5dc6%7Ctrx%3Dundefined',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8271155/82711557169.3.jpg?type=f140',
  },
  {
    name: '파프리카 못난이 빨강노랑혼합 2.5kg',
    price: '14,000원',
    mall: '해뜰과일',
    productLink:
      'https://smartstore.naver.com/haeddeul/products/8843580454?NaPm=ct%3Dlk2n14p4%7Cci%3D0zy0003PiF5y4WJncf01%7Ctr%3Dpla%7Chk%3Dc25cb206cb93323f0c0d1a39b073c386c5339cdd',
    imgUrl:
      'https://searchad-phinf.pstatic.net/MjAyMzA3MTRfMTU…d2abbb9-16f7-433b-b587-c70c16174a70.png?type=f200',
  },
  {
    name: '청송 못난이사과 흠집 가정용 부사사과 2kg',
    price: '16,900원',
    mall: '해안스토어',
    productLink:
      'https://smartstore.naver.com/haeanstore2021/products/8602738083?NaPm=ct%3Dlk2n6m88%7Cci%3D7434724de5d3b25a32bcb2bf54555f939622cb61%7Ctr%3Dslsl%7Csn%3D2930779%7Chk%3D37e337d0699c5b946e237f6400e77e5eb963e3b0',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8614723/86147238406.1.jpg?type=f140',
  },
  {
    name: '[언밸런스마켓] 못난이 농산물 꾸러미 과일 야채 채소 박스',
    price: '15,000원',
    mall: '언밸런스마켓',
    productLink:
      'https://smartstore.naver.com/unbalancemk/products/6669185000?NaPm=ct%3Dlk2n7rw8%7Cci%3Da8c296dfd768d95da80467bf19fd71c2edd12c12%7Ctr%3Dslsl%7Csn%3D5216574%7Chk%3Dde71476f7d6ac077fad7653d1425711add5d54f1',
    imgUrl:
      '	https://shopping-phinf.pstatic.net/main_8421368/84213685322.1.jpg?type=f140',
  },
  {
    name: '친환경 유기농 못난이 농산물 과일 채소 꾸러미 어스박스 미니 1.5kg 정기구독 정기배송',
    price: '13,000원',
    mall: '예스어스',
    productLink:
      'https://smartstore.naver.com/yesus/products/7569606811?NaPm=ct%3Dlk2n9j60%7Cci%3D6878da3b5fe38c69c309f636490c6e1d0a0e4456%7Ctr%3Dslsl%7Csn%3D6518634%7Chk%3D0335945c7b15a337a3c2753fcfe6e1c4dbbf1421',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8511410/85114107133.jpg?type=f140',
  },
  {
    name: '성주 꿀 참외 선물용 못난이',
    price: '8,900원',
    mall: '과일꾼',
    productLink:
      'https://smartstore.naver.com/fruitggun/products/4879690993?NaPm=ct%3Dlk2ncxuo%7Cci%3D5b282f1d0d3da9d593d3099d1cd30176a52e6f65%7Ctr%3Dslsl%7Csn%3D813670%7Chk%3Dc420f66453e15c8f783b8cab63ce7a01513110fd',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8242421/82424214464.2.jpg?type=f140',
  },
  {
    name: '껍질째먹는 사과 가정용 선물세트 못난이 부사',
    price: '35,900원',
    mall: '과일꾼',
    productLink:
      'https://smartstore.naver.com/fruitggun/products/5210121027?NaPm=ct%3Dlk2newu8%7Cci%3Dbcc0d924c180ffa099279d5c813c0806633708b8%7Ctr%3Dslsl%7Csn%3D813670%7Chk%3Dda5fb9938a10a3a1dfe286490d2a5013895ac0eb',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8275464/82754642762.9.jpg?type=f140',
  },
  {
    name: '성주 참외 꿀 못난이 선물용',
    price: '8,800원',
    mall: '농수산특별시',
    productLink:
      'https://smartstore.naver.com/ns_special/products/8480933236?NaPm=ct%3Dlk2ngpnk%7Cci%3D4566cd30e6702106246227f52a4049748153e602%7Ctr%3Dslsl%7Csn%3D7942904%7Chk%3D6ba892b3d19a26f894a01a00a8048fd775351ef3',
    imgUrl:
      '	https://shopping-phinf.pstatic.net/main_8602543/86025433559.4.jpg?type=f140',
  },
  {
    name: '성주참외 미니 한입 꼬마 가정용 못난이 참외',
    price: '11,900원',
    mall: '팜이야',
    productLink:
      'https://smartstore.naver.com/famiya/products/6631226002?NaPm=ct%3Dlk2nicao%7Cci%3Db49dc532cd98cd85a4e468b7a4f6716fa4a95ce9%7Ctr%3Dslsl%7Csn%3D3659429%7Chk%3Dc6c0f308ac87cff0103db5ed1b7e25a4c2fd58ad',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8417572/84175726324.jpg?type=f140',
  },
  {
    name: '사과 청송사과 부사 얼음골 못난이 꿀 유명한곳 5kg',
    price: '49,100원',
    mall: '경북청송 장시화',
    productLink:
      'https://shopping.naver.com/window-products/directfarm/5937427668?NaPm=ct%3Dlk2nkc20%7Cci%3D719442bcdfdda3353cda9ccfc2e9369322d2e7a2%7Ctr%3Dslsl%7Csn%3D320096%7Chk%3D879da9da1c6a7a09c6bdddbb68bf879b6300e699',
    imgUrl:
      'https://shopping.naver.com/window-products/directfarm/5937427668?NaPm=ct%3Dlk2nkc20%7Cci%3D719442bcdfdda3353cda9ccfc2e9369322d2e7a2%7Ctr%3Dslsl%7Csn%3D320096%7Chk%3D879da9da1c6a7a09c6bdddbb68bf879b6300e699',
  },
  {
    name: '리프레쉬 국내산 미니파프리카 8팩 2KG 못난이야채 못난이농산물',
    price: '광고12,900원',
    mall: '리프레쉬',
    productLink:
      'https://smartstore.naver.com/refresh_store/products/7529887321?NaPm=ct%3Dlk2nlrr4%7Cci%3D0zW0002SjF5yCZCyYLlP%7Ctr%3Dpla%7Chk%3D847064fd2514a24119d638e6cb9fd296d1d51771',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8507438/85074387643.jpg?type=f140',
  },
  {
    name: '완숙 찰 토마토 5kg 못난이 쥬스용 주스용',
    price: '19,800원',
    mall: '따옴농장',
    productLink:
      'https://smartstore.naver.com/ddaomfarm/products/5252019290?NaPm=ct%3Dlk2nmvvk%7Cci%3D351ef07ff8c3a61759b76eed49c4d478457740b3%7Ctr%3Dslsl%7Csn%3D347045%7Chk%3D09558f4162f5e0637f3c882b91b9d34436895baa',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8279654/82796541768.3.jpg?type=f140',
  },
  {
    name: '여름 초록사과 못난이 아오리 흠과 미니 풋사과 소과 2kg',
    price: '15,000원',
    mall: '싱글사리',
    productLink:
      'https://smartstore.naver.com/singlesari/products/8048263677?NaPm=ct%3Dlk2nnygg%7Cci%3Ddfc71699798e48aaad5083b6a2b2a100948cfc08%7Ctr%3Dslsl%7Csn%3D1086166%7Chk%3Dac5300383ffefd2e32e645088d0b2ea7bd520147',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8559276/85592764000.3.jpg?type=f140',
  },
  {
    name: '못난이 흙당근 햇당근 3kg 5kg 주스용 쥬스용 착즙 5키로',
    price: '10,900원',
    mall: '대감댁',
    productLink:
      'https://smartstore.naver.com/daegamdaek/products/6655622262?NaPm=ct%3Dlk2nteg0%7Cci%3D0zi0000qk%5F5y3Hzje1mg%7Ctr%3Dpla%7Chk%3Dbba49b4c300a425e09eebe96f1af5eaa2ccc2869',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8420012/84200122584.jpg?type=f140',
  },
  {
    name: '못난이 흙 당근 10kg 구좌 갈아먹는 주스용 흙 당근 판매 열매드림',
    price: '16,830원',
    mall: '열매드림',
    productLink:
      'http://item.gmarket.co.kr/DetailView/Item.asp?goodscode=2947743908&GoodsSale=Y&jaehuid=200001169&NaPm=ct%3Dlk2nuy00%7Cci%3Dd0a6c24a46422d005907df746f9964f731267c79%7Ctr%3Dslsl%7Csn%3D24%7Chk%3D2d555e383db2522ec6ce061f07e79074e77e2dfb',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_3997034/39970346889.jpg?type=f140',
  },
  {
    name: '단골아저씨당근 못난이쥬스용흙당근1.5kg+1.5kg 당근 제철 높은당도 아삭식감',
    price: '8,900원',
    mall: '디콤마',
    productLink:
      'https://smartstore.naver.com/dcomma/products/6076311261?NaPm=ct%3Dlk2nwrl4%7Cci%3D28a62cad6a0b437d2948008b1b3a12e2378cf314%7Ctr%3Dslsl%7Csn%3D460322%7Chk%3D4fa49587ff6291663633ebe6b3254854aaf61380',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8362081/83620810749.jpg?type=f140',
  },
  {
    name: '못난이 당근 10kg 제주 구좌 주스 즙 흙당근 판매 진맛깔 1개',
    price: '16,590원',
    mall: '진맛깔',
    productLink:
      'https://www.coupang.com/vp/products/7325751065?itemId=18797756599&vendorItemId=85928622645&src=1032001&spec=10305201&addtag=400&ctag=7325751065&lptag=I18797756599&itime=20230714231722&pageType=PRODUCT&pageValue=7325751065&wPcid=16777726320896161860390&wRef=cr.shopping.naver.com&wTime=20230714231722&redirect=landing&mcid=61549402aa38463381c0f81f65b46242&isAddedCart=',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_4000017/40000179553.jpg?type=f140',
  },

  {
    name: '찰토마토 못난이 쥬스용10kg 흠과 토마토 랜덤반품불가',
    price: '24,520원',
    mall: '달달과수원',
    productLink:
      'http://item.gmarket.co.kr/DetailView/Item.asp?goodscode=1956580856&GoodsSale=Y&jaehuid=200001169&NaPm=ct%3Dlk2o30w8%7Cci%3D97261249c47a7abc99532e25c16f01ec3d5a3653%7Ctr%3Dslsl%7Csn%3D24%7Chk%3D9b3bb314cf6f2a31afa3b534dbac5507378447c7',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_3469328/34693283016.jpg?type=f140',
  },
  {
    name: '완숙 찰토마토 5kg 랜덤못난이 대추 방울토마토',
    price: '14,900원',
    mall: '백호유통',
    productLink:
      'https://smartstore.naver.com/whitetigerdistribution/products/8136951619?NaPm=ct%3Dlk2o4re8%7Cci%3Dc37fe9873e51691106d93c1a5659e68c310349a9%7Ctr%3Dslsl%7Csn%3D5695495%7Chk%3D4935d62282692d13e3f9598daa5f80534a6fbe0a',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8568145/85681451942.1.jpg?type=f140',
  },
  {
    name: '23년 무안 햇양파 조생양파 못난이 양파 3kg 5kg 10kg',
    price: '9,900원',
    mall: '꼬꼬마짱 라이프몰',
    productLink:
      'https://smartstore.naver.com/gogomazzanglife?NaPm=ct%3Dlk2o64yg%7Cci%3Dshopn%7Ctr%3Dslsl%7Chk%3D8f562481a3372aa19f95d813ace6265076e6db30%7Ctrx%3Dundefined',
    imgUrl:
      '	https://shopping-phinf.pstatic.net/main_8596446/85964467724.jpg?type=f140',
  },
  {
    name: '햇미니양파 국내산 창녕 23년 못난이양파 햇양파장아찌 양파대 생양파 김치용 제철 특 대',
    price: '5,900원',
    mall: '바로보담',
    productLink:
      'https://smartstore.naver.com/barobodam/products/8702438330?NaPm=ct%3Dlk2o7i5s%7Cci%3D1360574c5ee8dc74eefb083e0365c1cf5f811254%7Ctr%3Dslsl%7Csn%3D2699302%7Chk%3D9ee0721b19a1256734dc724e31f8276036516002',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8624693/86246938653.jpg?type=f140',
  },
  {
    name: '[한정수량 특가] 친환경 전북 군산 무농약 못난이 햇 양파 3kg',
    price: '7,900원',
    mall: '예스어스',
    productLink:
      'https://smartstore.naver.com/yesus/products/8828738140?NaPm=ct%3Dlk2o8n20%7Cci%3D5d38ade44d2635915ce60d94a66bf5513ed53057%7Ctr%3Dslsl%7Csn%3D6518634%7Chk%3D3330cb7560d041815e69287e00e424eba8a683d7',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8637323/86373238463.jpg?type=f140',
  },
  {
    name: '무안 23년 못난이 저장 햇 양파 소형 5kg',
    price: '15,200원',
    mall: '굿데이올데이',
    productLink:
      'https://smartstore.naver.com/goodolday/products/8869925372?NaPm=ct%3Dlk2o9r6g%7Cci%3Da61c6551675f7a1ccc3a88cb39d4c7d30058558c%7Ctr%3Dslsl%7Csn%3D1273774%7Chk%3D385a3f7fddcbfa92fbb80e70adf25f8c6255ddd4',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_4118662/41186625371.jpg?type=f140',
  },
  {
    name: '못난이마늘- 파지-벌마늘9kg',
    price: '21,250원',
    mall: '통큰착한마늘',
    productLink:
      'https://smartstore.naver.com/j-b-manel/products/8782515459?NaPm=ct%3Dlk2obvkg%7Cci%3D4a6ce8c988907992332eee2a648845dc95b44b14%7Ctr%3Dslsl%7Csn%3D8419004%7Chk%3D86204b6159f53e0f95c0b4da892c878e1a6f0a5f',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8632701/86327015782.jpg?type=f140',
  },
  {
    name: '깐마늘(파지) 100%국산 못난이 마늘 1kg 10kg 20kg / 농부갑부',
    price: '합천파머스',
    mall: '8,000원',
    productLink:
      'https://smartstore.naver.com/hcfarmers/products/6256679505?NaPm=ct%3Dlk2od7eo%7Cci%3Dcb1389fff4246a7fdd1ae9782e1e7368b15f4708%7Ctr%3Dslsl%7Csn%3D627493%7Chk%3D1101bd385a086fdf492af201d222eab2f5ee1c18',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8380118/83801181994.jpg?type=f140',
  },
  {
    name: '[오직건강마늘] 국내산 못난이 깐마늘 5kg 파지 못생겨도 맛있는 마늘',
    price: '41,800원',
    mall: '오직건강마늘스토어',
    productLink:
      'https://smartstore.naver.com/57mama?NaPm=ct%3Dlk2oeczx%7Cci%3Dshopn%7Ctr%3Dslsl%7Chk%3D0a9dbc8a96ce9d895794a0690083ccbade8230b3%7Ctrx%3Dundefined',
    imgUrl:
      '	https://shopping-phinf.pstatic.net/main_8360146/83601466413.jpg?type=f140',
  },
  {
    name: '국내산 가지 2.5KG 5KG 10KG 못난이',
    price: '4,900원',
    mall: '마시뜨라',
    productLink:
      'https://smartstore.naver.com/masiddra/products/8703477837?n_media=11068&n_query=%EB%AA%BB%EB%82%9C%EC%9D%B4%EA%B0%80%EC%A7%80&n_rank=3&n_ad_group=grp-a001-02-000000035780006&n_ad=nad-a001-02-000000252254139&n_campaign_type=2&n_mall_id=ncp_1okw8q_01&n_mall_pid=8703477837&n_ad_group_type=2&NaPm=ct%3Dlk2ogtt4%7Cci%3D0A40001vl%5F5yN86qGL3T%7Ctr%3Dpla%7Chk%3D14abc5ca22eb42a051d1ee54f51d929002cd4e39',
    imgUrl:
      '	https://shopping-phinf.pstatic.net/main_8624797/86247978160.1.jpg?type=f140',
  },
  {
    name: '가지 못난이 국내산 특 5kg 10kg',
    price: '9,900원',
    mall: '농터',
    productLink:
      'https://smartstore.naver.com/ntstore/products/3830874140?NaPm=ct%3Dlk2ohk1k%7Cci%3Dbd297a67a5a36f3e9712721eccbb3aff5fdaf2a2%7Ctr%3Dslsl%7Csn%3D804325%7Chk%3Dd0e241788b1834e4ce61b55781aa32074dd3370e',
    imgUrl:
      '	https://shopping-phinf.pstatic.net/main_8137539/81375394140.1.jpg?type=f140',
  },
  {
    name: '못난이 가지 5kg',
    price: '13,900원',
    mall: '새벽들유통',
    productLink:
      'https://smartstore.naver.com/sbdd/products/5025772264?NaPm=ct%3Dlk2oiaa0%7Cci%3D10ee699043b19f8f1a786a52bbc7b7a78d1172dd%7Ctr%3Dslsl%7Csn%3D808108%7Chk%3D432250f028650830f45b7b593eec3c3cab383ffe',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8257029/82570293113.jpg?type=f140',
  },
  {
    name: '가지 못난이가지 싱싱한 당일경매 1kg',
    price: '3,000원',
    mall: '영일만농수산',
    productLink:
      'https://smartstore.naver.com/market-bro/products/8495157480?NaPm=ct%3Dlk2oizqo%7Cci%3Da27bd1c8ebfeae91c440a37c2cbf192e98e4caff%7Ctr%3Dslsl%7Csn%3D8413804%7Chk%3D57031da77b827b7593c521c7f37f0edc1286a3e4',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8603965/86039657803.2.jpg?type=f140',
  },
  {
    name: '못난이 대서 햇감자 5kg/찐감자10kg',
    price: '24,900원',
    mall: '이심이 농장',
    productLink:
      'https://smartstore.naver.com/2simfarm/products/5078031064?NaPm=ct%3Dlk2olmnc%7Cci%3D0yC00011lp5ycpzoRfoe%7Ctr%3Dpla%7Chk%3Deeabd4423879788c61d7f2c921ed0af47f16daa2',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8262255/82622552762.jpg?type=f140',
  },
  {
    name: '국산 못난이감자 3kg 5kg 10kg 알 햇감자 포슬포슬',
    price: '7,900원',
    mall: '대감댁',
    productLink:
      'https://smartstore.naver.com/daegamdaek/products/7756782404?NaPm=ct%3Dlk2omdnk%7Cci%3D0zW0001ylp5yLA%2DQZvn%5F%7Ctr%3Dpla%7Chk%3Dd0d9ebe658d3a5e1fdfd3230dd6e6d08d6ad3410',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8530128/85301282726.jpg?type=f140',
  },
  {
    name: '두백감자 강원도햇감자 조풍감자 못난이 5kg',
    price: '15,400원',
    mall: '대한먹테크',
    productLink:
      'https://smartstore.naver.com/d_h_m/products/6906388770?NaPm=ct%3Dlk2onq9k%7Cci%3Dd75d976b242a3c64e23489b18ba0936d0363e387%7Ctr%3Dslsl%7Csn%3D5843884%7Chk%3De014bd04122de88a7de70492f60f6d3b5f8827bf',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8445088/84450889092.2.jpg?type=f140',
  },
  {
    name: '식당용 반찬용 가공용 조림용 못난이 감자 3kg 5kg 10kg',
    price: '6,900원',
    mall: '생글이네 식탁',
    productLink:
      'https://smartstore.naver.com/sanggrmam-table/products/4496096858?NaPm=ct%3Dlk2op1c0%7Cci%3Df07894d09534e60822dc1e8143ccfb52933d7703%7Ctr%3Dslsl%7Csn%3D845164%7Chk%3D5307cb7bc5384540a0d01e7c3e3aa8bea3c4e156',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8204061/82040619778.1.jpg?type=f140',
  },
  {
    name: '못난이 애플구마 10kg 한입 세척 꿀고구마',
    price: '22,000원',
    mall: '해나미',
    productLink:
      'https://smartstore.naver.com/haenami/products/6367078955?NaPm=ct%3Dlk2opp94%7Cci%3D0zW0003Zlp5y7mOf1voV%7Ctr%3Dpla%7Chk%3Defa39c701f8a8fa5f854f76179eaa084e1e400d4',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8391157/83911579278.jpg?type=f140',
  },
  {
    name: '[당일 한정수량] 해남 꿀고구마 못난이 10kg 파지 모음',
    price: '13,900원',
    mall: '달콤한입',
    productLink:
      'https://smartstore.naver.com/11280221/products/8328494214?NaPm=ct%3Dlk2oqnz4%7Cci%3D5a09f62319539474d2ad5456039c97612ced83ec%7Ctr%3Dslsl%7Csn%3D6418644%7Chk%3Df3eec5a7e4c5d68f4012150b224280cf37445d13',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8587299/85872994537.1.jpg?type=f140',
  },
  {
    name: '자연맛남 22년수확 해남 첫사랑 꿀고구마 못난이 10kg',
    price: '9,890원',
    mall: '롤러몰',
    productLink:
      'https://smartstore.naver.com/rabong1/products/8356992743?NaPm=ct%3Dlk2os3o8%7Cci%3D5f35b5839887eac29336da7d38168bcbd2a27df4%7Ctr%3Dslsl%7Csn%3D6958175%7Chk%3D6363db54c0393841fa05ad36011689248f33ff94',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8590149/85901493066.jpg?type=f140',
  },
  {
    name: '해남 달망 꿀밤고구마 못난이 무선별 10kg',
    price: '17,990원',
    mall: '달망푸드',
    productLink:
      'https://smartstore.naver.com/dalmangfood/products/8304485170?NaPm=ct%3Dlk2otfig%7Cci%3D03a3ca6b571d955680c79cfe8e1815cc791d079d%7Ctr%3Dslsl%7Csn%3D2005240%7Chk%3Da727c34f70e4bf84012b6dd553a741ad83164552',
    imgUrl:
      'https://shopping-phinf.pstatic.net/main_8584898/85848985493.jpg?type=f140',
  },
];

export default SHOP_LIST;
