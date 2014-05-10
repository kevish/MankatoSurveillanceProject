var map,
                currentPositionMarker,
                mapCenter = new google.maps.LatLng(44.165,-94.005),
                map,
				pointarray,
				heatmap;
		    
				var taxiData = [
  new google.maps.LatLng(44.16564291,-94.00509208),
  new google.maps.LatLng(44.15947463,-94.01505203),
  new google.maps.LatLng(44.15947463,-94.01505203),
  new google.maps.LatLng(44.15079455,-93.99378140),
  new google.maps.LatLng(44.15190152,-93.98606902),
  new google.maps.LatLng(44.15190152,-93.98606902),
  new google.maps.LatLng(44.16083122,-94.00938905),
  new google.maps.LatLng(44.16046404,-94.01082421),
  new google.maps.LatLng(44.13962211,-93.97532430),
  new google.maps.LatLng(44.15489865,-93.99865084),
  new google.maps.LatLng(44.15648672,-93.95182961),
  new google.maps.LatLng(44.14905312,-93.99168541),
  new google.maps.LatLng(44.16333452,-94.00556051),
  new google.maps.LatLng(44.1635536, -94.00573500),
  new google.maps.LatLng(44.1635536, -94.00573500),
  new google.maps.LatLng(44.1635536, -94.00573500),
  new google.maps.LatLng(44.1635536, -94.00573500),
  new google.maps.LatLng(44.1635536, -94.00573500),
  new google.maps.LatLng(44.1635536, -94.00573500),
  new google.maps.LatLng(44.1635536, -94.00573500),
  new google.maps.LatLng(44.1635536, -94.00573500),
  new google.maps.LatLng(44.1635536, -94.00573500),
  new google.maps.LatLng(44.1635536, -94.00573500),
  new google.maps.LatLng(44.16619106,-94.00557787),
  new google.maps.LatLng(44.16778485,-94.00312925),
  new google.maps.LatLng(44.17308472,-93.99726682),
  new google.maps.LatLng(44.17329757,-93.99526424),
  new google.maps.LatLng(44.16634093,-94.00338141),
  new google.maps.LatLng(44.16650514,-94.00348259),
  new google.maps.LatLng(44.16629841,-94.00302706),
  new google.maps.LatLng(44.16579382,-93.98562045),
  new google.maps.LatLng(44.15671127,-94.01011403),
  new google.maps.LatLng(44.15704832,-94.00921219),
  new google.maps.LatLng(44.15998993,-94.00003782),
  new google.maps.LatLng(44.16194300,-93.99887207),
  new google.maps.LatLng(44.14915639,-93.98649671),
  new google.maps.LatLng(44.14911214,-93.98855973),
  new google.maps.LatLng(44.14910876,-93.98890744),
  new google.maps.LatLng(44.14912904,-93.98682119),
  new google.maps.LatLng(44.14911552,-93.98821202),
  new google.maps.LatLng(44.14221215,-94.00575825),
  new google.maps.LatLng(44.16835212,-93.98426849),
  new google.maps.LatLng(44.16672516,-93.94151003),
  new google.maps.LatLng(44.16532417,-93.99696619),
  new google.maps.LatLng(44.16532417,-93.99696619),
  new google.maps.LatLng(44.16196257,-93.9892436 ),
  new google.maps.LatLng(44.16196257,-93.9892436 ),
  new google.maps.LatLng(44.1419833, -93.98670389),
  new google.maps.LatLng(44.15901514,-94.00457723),
  new google.maps.LatLng(44.14139087,-93.98658774),
  new google.maps.LatLng(44.16488106,-93.99756043),
  new google.maps.LatLng(44.16685811,-94.00308252),
  new google.maps.LatLng(44.16651943,-94.00361367),
  new google.maps.LatLng(44.16649916,-94.00361639),
  new google.maps.LatLng(44.16760146,-93.95233401),
  new google.maps.LatLng(44.14414367,-94.00574866),
  new google.maps.LatLng(44.1570208, -93.96400152),
  new google.maps.LatLng(44.13252083,-93.98519416),
  new google.maps.LatLng(44.15701263,-94.0022515 ),
  new google.maps.LatLng(44.14000598,-93.98336202),
  new google.maps.LatLng(44.18970027,-94.01424476),
  new google.maps.LatLng(44.16684545,-93.97997528),
  new google.maps.LatLng(44.16466918,-93.98484377),
  new google.maps.LatLng(44.16466918,-93.98484377),
  new google.maps.LatLng(44.16466918,-93.98484377),
  new google.maps.LatLng(44.17598089,-93.99465453),
  new google.maps.LatLng(44.15065453,-93.97988837),
  new google.maps.LatLng(44.17758429,-93.99289855),
  new google.maps.LatLng(44.16078316,-93.98343917),
  new google.maps.LatLng(44.16684055,-93.97531001),
  new google.maps.LatLng(44.18775155,-94.01168338),
  new google.maps.LatLng(44.17713204,-93.96639547),
  new google.maps.LatLng(44.18588155,-94.01250991),
  new google.maps.LatLng(44.16019499,-94.01537019),
  new google.maps.LatLng(44.16019499,-94.01537019),
  new google.maps.LatLng(44.16019499,-94.01537019),
  new google.maps.LatLng(44.16019499,-94.01537019),
  new google.maps.LatLng(44.16019499,-94.01537019),
  new google.maps.LatLng(44.16019499,-94.01537019),
  new google.maps.LatLng(44.16009006,-93.98254269),
  new google.maps.LatLng(44.16683945,-93.9738321 ),
  new google.maps.LatLng(44.17882641,-93.99183457),
  new google.maps.LatLng(44.17882641,-93.99183457),
  new google.maps.LatLng(44.15053438,-93.97617718),
  new google.maps.LatLng(44.15050857,-93.97583532),
  new google.maps.LatLng(44.15037637,-93.97562925),
  new google.maps.LatLng(44.15003687,-93.97585393),
  new google.maps.LatLng(44.16000103,-94.01747182),
  new google.maps.LatLng(44.16007886,-94.01826973),
  new google.maps.LatLng(44.16000864,-94.01749197),
  new google.maps.LatLng(44.13795862,-93.96057517),
  new google.maps.LatLng(44.17967555,-93.99248311),
  new google.maps.LatLng(44.17967555,-93.99248311),
  new google.maps.LatLng(44.14888933,-94.02633471),
  new google.maps.LatLng(44.16695456,-93.97218999),
  new google.maps.LatLng(44.16684281,-93.97170299),
  new google.maps.LatLng(44.16684281,-93.97170299),
  new google.maps.LatLng(44.14886383,-93.9894152 ),
  new google.maps.LatLng(44.19237605,-93.95368538),
  new google.maps.LatLng(44.15997274,-94.01858704),
  new google.maps.LatLng(44.14806568,-93.99423186),
  new google.maps.LatLng(44.14806568,-93.99423186),
  new google.maps.LatLng(44.14806568,-93.99423186),
  new google.maps.LatLng(44.14806568,-93.99423186),
  new google.maps.LatLng(44.14782534,-93.98753961),
  new google.maps.LatLng(44.1480943, -93.98828167),
  new google.maps.LatLng(44.17853093,-93.98446737),
  new google.maps.LatLng(44.16801213,-93.96562511),
  new google.maps.LatLng(44.16801213,-93.96562511),
  new google.maps.LatLng(44.14690629,-93.99422672),
  new google.maps.LatLng(44.1669386, -93.96166472),
  new google.maps.LatLng(44.18077632,-93.98403985),
  new google.maps.LatLng(44.14621481,-93.99422796),
  new google.maps.LatLng(44.14621481,-93.99422796),
  new google.maps.LatLng(44.14621481,-93.99422796),
  new google.maps.LatLng(44.14621481,-93.99422796),
  new google.maps.LatLng(44.14621481,-93.99422796),
  new google.maps.LatLng(44.14621481,-93.99422796),
  new google.maps.LatLng(44.14621481,-93.99422796),
  new google.maps.LatLng(44.14621533,-93.99438034),
  new google.maps.LatLng(44.16506504,-93.96071095),
  new google.maps.LatLng(44.16491751,-93.960554  ),
  new google.maps.LatLng(44.16693959,-93.95723478),
  new google.maps.LatLng(44.16694006,-93.95683828),
  new google.maps.LatLng(44.14496552,-93.98936951),
  new google.maps.LatLng(44.14496552,-93.98936951),
  new google.maps.LatLng(44.14496604,-93.98921713),
  new google.maps.LatLng(44.14496552,-93.98936951),
  new google.maps.LatLng(44.14496605,-93.98921714),
  new google.maps.LatLng(44.18145893,-93.95472538),
  new google.maps.LatLng(44.18145893,-93.95472538),
  new google.maps.LatLng(44.14483677,-93.99438776),
  new google.maps.LatLng(44.18452003,-93.99250884),
  new google.maps.LatLng(44.18440603,-93.99251573),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.17039528,-93.94958728),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.17041113,-93.95224565),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.1705052, -93.95264428),
  new google.maps.LatLng(44.17039528,-93.94958728),
  new google.maps.LatLng(44.1705052, -93.95264429),
  new google.maps.LatLng(44.1705052, -93.95264429),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16693989,-93.95627622),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16693989,-93.95627622),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16681653,-93.95392534),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16681653,-93.95392534),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682199,-93.95486618),
  new google.maps.LatLng(44.1668081, -93.95234774),
  new google.maps.LatLng(44.16681653,-93.95392534),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16693241,-93.94973489),
  new google.maps.LatLng(44.16682199,-93.95486618),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.16682292,-93.94996709),
  new google.maps.LatLng(44.1430696, -93.98917638),
  new google.maps.LatLng(44.1430696, -93.98917638),
  new google.maps.LatLng(44.14306961,-93.98917638),
  new google.maps.LatLng(44.15840584,-94.0254238 ),
  new google.maps.LatLng(44.18486603,-93.99566678),
  new google.maps.LatLng(44.17050187,-93.94875224),
  new google.maps.LatLng(44.17039246,-93.94706081),
  new google.maps.LatLng(44.17050222,-93.94678804),
  new google.maps.LatLng(44.17050187,-93.94875224),
  new google.maps.LatLng(44.17039246,-93.94706081),
  new google.maps.LatLng(44.16310348,-93.94852959),
  new google.maps.LatLng(44.16310348,-93.94852959),
  new google.maps.LatLng(44.16681949,-93.94886061),
  new google.maps.LatLng(44.16681949,-93.94886061),
  new google.maps.LatLng(44.18536573,-93.98545792),
  new google.maps.LatLng(44.17761348,-93.94780076),
  new google.maps.LatLng(44.14940063,-94.02471112),
  new google.maps.LatLng(44.15092949,-93.99171491),
  new google.maps.LatLng(44.1508349, -93.99016605),
  new google.maps.LatLng(44.15704777,-94.00605029),
  new google.maps.LatLng(44.15205381,-93.98593557),
  new google.maps.LatLng(44.14671934,-93.98759668),
  new google.maps.LatLng(44.1663151, -94.00020852),
  new google.maps.LatLng(44.17279212,-93.99426225),
  new google.maps.LatLng(44.16143728,-94.02289672),
  new google.maps.LatLng(44.19383165,-93.95946053),
  new google.maps.LatLng(44.15236272,-94.00061294),
  new google.maps.LatLng(44.15257328,-93.98071026),
  new google.maps.LatLng(44.15257328,-93.98071026),
  new google.maps.LatLng(44.15911613,-94.00490949),
  new google.maps.LatLng(44.16114935,-93.99731008),
  new google.maps.LatLng(44.1620363, -94.02801145),
  new google.maps.LatLng(44.16091686,-94.02814631),
  new google.maps.LatLng(44.16756734,-93.99867855),
  new google.maps.LatLng(44.15444805,-93.97771764),
  new google.maps.LatLng(44.16892853,-93.95233196),
  new google.maps.LatLng(44.18033805,-93.95682438),
  new google.maps.LatLng(44.14490022,-93.99250982),
  new google.maps.LatLng(44.14501818,-93.9918042 ),
  new google.maps.LatLng(44.14501411,-93.99215843),
  new google.maps.LatLng(44.18718092,-94.00149602),
  new google.maps.LatLng(44.18711964,-94.00149858),
  new google.maps.LatLng(44.17050964,-93.9453037 ),
  new google.maps.LatLng(44.17052311,-93.94283111),
  new google.maps.LatLng(44.17050964,-93.9453037 ),
  new google.maps.LatLng(44.17050964,-93.9453037 ),
  new google.maps.LatLng(44.17050964,-93.9453037 ),
  new google.maps.LatLng(44.17050964,-93.9453037 ),
  new google.maps.LatLng(44.17050964,-93.9453037 ),
  new google.maps.LatLng(44.17690362,-93.94321598),
  new google.maps.LatLng(44.17690362,-93.94321598),
  new google.maps.LatLng(44.17690362,-93.94321598),
  new google.maps.LatLng(44.15605247,-93.96200808),
  new google.maps.LatLng(44.16310348,-94.00495732),
  new google.maps.LatLng(44.16310348,-94.00495732),
  new google.maps.LatLng(44.16495303,-94.00319983),
  new google.maps.LatLng(44.17429866,-93.99424861),
  new google.maps.LatLng(44.16871363,-93.99966134),
  new google.maps.LatLng(44.17241435,-93.99605854),
  new google.maps.LatLng(44.16589277,-94.00230761),
  new google.maps.LatLng(44.16204519,-94.00595357),
  new google.maps.LatLng(44.16962567,-93.99873016),
  new google.maps.LatLng(44.15025514,-93.99767296),
  new google.maps.LatLng(44.16901127,-93.99731362),
  new google.maps.LatLng(44.16901127,-93.99731362),
  new google.maps.LatLng(44.140719,  -93.99052117),
  new google.maps.LatLng(44.15801573,-94.0128918 ),
  new google.maps.LatLng(44.14847836,-93.99700435),
  new google.maps.LatLng(44.14847836,-93.99700435),
  new google.maps.LatLng(44.17047288,-93.97892761),
  new google.maps.LatLng(44.1682523, -93.99622632),
  new google.maps.LatLng(44.16770801,-93.99677332),
  new google.maps.LatLng(44.16763973,-93.99495764),
  new google.maps.LatLng(44.16635405,-93.99409366),
  new google.maps.LatLng(44.1669536, -93.99370024),
  new google.maps.LatLng(44.16967899,-94.00044263),
  new google.maps.LatLng(44.16932057,-94.0007673 ),
  new google.maps.LatLng(44.15827263,-94.01125408),
  new google.maps.LatLng(44.16307583,-94.00118495),
  new google.maps.LatLng(44.13922735,-93.98657868),
  new google.maps.LatLng(44.1834812, -93.95751198),
  new google.maps.LatLng(44.14505064,-93.98919436),
  new google.maps.LatLng(44.18295095,-93.98382059),
  new google.maps.LatLng(44.15746346,-94.01180044),
  new google.maps.LatLng(44.15706022,-93.9704587 ),
  new google.maps.LatLng(44.15706022,-93.9704587 ),
  new google.maps.LatLng(44.16216625,-93.93892533),
  new google.maps.LatLng(44.17355593,-93.98971636),
  new google.maps.LatLng(44.16611517,-93.99729824),
  new google.maps.LatLng(44.14951247,-93.98198214),
  new google.maps.LatLng(44.16974019,-93.99871272),
  new google.maps.LatLng(44.16865173,-93.99565784),
  new google.maps.LatLng(44.16842418,-93.99605835),
  new google.maps.LatLng(44.16780333,-93.99461652),
  new google.maps.LatLng(44.16843466,-93.9920631 ),
  new google.maps.LatLng(44.16803974,-93.99244881),
  new google.maps.LatLng(44.17050935,-93.99968064),
  new google.maps.LatLng(44.1703343, -94.00002991),
  new google.maps.LatLng(44.17033186,-93.99984799),
  new google.maps.LatLng(44.16351076,-94.00465966),
  new google.maps.LatLng(44.16197298,-94.00226605),
  new google.maps.LatLng(44.16179662,-94.00054108),
  new google.maps.LatLng(44.16287639,-94.00314262),
  new google.maps.LatLng(44.16401378,-94.00608405),
  new google.maps.LatLng(44.16501192,-94.00670369),
  new google.maps.LatLng(44.16501192,-94.00670369),
  new google.maps.LatLng(44.1651961, -94.00671666),
  new google.maps.LatLng(44.1651961, -94.00671666),
  new google.maps.LatLng(44.1651961, -94.00671666),
  new google.maps.LatLng(44.16501192,-94.00670369),
  new google.maps.LatLng(44.1651961, -94.00671666),
  new google.maps.LatLng(44.14334494,-93.96661944),
  new google.maps.LatLng(44.16018224,-94.0237375 ),
  new google.maps.LatLng(44.16180113,-94.0023449 ),
  new google.maps.LatLng(44.17581326,-93.9888975 ),
  new google.maps.LatLng(44.17300436,-93.99159584),
  new google.maps.LatLng(44.1607375, -94.00334197),
  new google.maps.LatLng(44.1607375, -94.00334197),
  new google.maps.LatLng(44.16073751,-94.00334197),
  new google.maps.LatLng(44.15712946,-93.96991217),
  new google.maps.LatLng(44.17096403,-93.96098648),
  new google.maps.LatLng(44.17005699,-93.99145027),
  new google.maps.LatLng(44.16789483,-93.9762101 ),
  new google.maps.LatLng(44.15201558,-94.00187328),
  new google.maps.LatLng(44.16917161,-93.99137458),
  new google.maps.LatLng(44.16994618,-93.99637266),
  new google.maps.LatLng(44.17191117,-93.99854896),
  new google.maps.LatLng(44.16179991,-94.00243798),
  new google.maps.LatLng(44.16374289,-94.00634352),
  new google.maps.LatLng(44.16308174,-94.00680513),
  new google.maps.LatLng(44.163145, -94.00692966),
  new google.maps.LatLng(44.16350966,-94.00658518),
  new google.maps.LatLng(44.16374289,-94.00634352),
  new google.maps.LatLng(44.16374289,-94.00634352),
  new google.maps.LatLng(44.163145, -94.00692966),
  new google.maps.LatLng(44.16374289,-94.00634352),
  new google.maps.LatLng(44.16284606,-94.00722273),
  new google.maps.LatLng(44.1632611, -94.00662928),
  new google.maps.LatLng(44.16434613,-94.00752779),
  new google.maps.LatLng(44.1637708, -94.00807353),
  new google.maps.LatLng(44.15719175,-94.02615991),
  new google.maps.LatLng(44.15621004,-94.02466311),
  new google.maps.LatLng(44.14625893,-94.0022975 ),
  new google.maps.LatLng(44.14625803,-94.00244987),
  new google.maps.LatLng(44.14625893,-94.0022975 ),
  new google.maps.LatLng(44.16115367,-94.00104599),
  new google.maps.LatLng(44.16115367,-94.00104599),
  new google.maps.LatLng(44.16770042,-93.99480827),
  new google.maps.LatLng(44.16572876,-93.96955426),
  new google.maps.LatLng(44.15477906,-94.00858214),
  new google.maps.LatLng(44.14618934,-93.99939623),
  new google.maps.LatLng(44.14436821,-94.0073696 ),
  new google.maps.LatLng(44.17108737,-93.98851615),
  new google.maps.LatLng(44.14842808,-94.00114277),
  new google.maps.LatLng(44.14842829,-94.00112589),
  new google.maps.LatLng(44.14842829,-94.00112589),
  new google.maps.LatLng(44.17060841,-93.99397328),
  new google.maps.LatLng(44.17223387,-93.99824433),
  new google.maps.LatLng(44.16776555,-93.96934957),
  new google.maps.LatLng(44.16069167,-94.00543032),
  new google.maps.LatLng(44.16177542,-94.00804854),
  new google.maps.LatLng(44.16188007,-94.00795019),
  new google.maps.LatLng(44.16106342,-94.02663476),
  new google.maps.LatLng(44.16084148,-94.02802021),
  new google.maps.LatLng(44.16084148,-94.02802021),
  new google.maps.LatLng(44.17168704,-93.98906387),
  new google.maps.LatLng(44.16516986,-93.99531666),
  new google.maps.LatLng(44.14350618,-93.99940833),
  new google.maps.LatLng(44.14461098,-93.99940335),
  new google.maps.LatLng(44.14350618,-93.99940833),
  new google.maps.LatLng(44.14350618,-93.99940833),
  new google.maps.LatLng(44.18851723,-93.94019471),
  new google.maps.LatLng(44.14233961,-93.98409159),
  new google.maps.LatLng(44.14263802,-93.98410534),
  new google.maps.LatLng(44.14322383,-94.00737892),
  new google.maps.LatLng(44.14841793,-94.00196981),
  new google.maps.LatLng(44.16270477,-94.02943369),
  new google.maps.LatLng(44.16268985,-94.03017797),
  new google.maps.LatLng(44.1732057, -93.9953891 ),
  new google.maps.LatLng(44.17373715,-93.99678201),
  new google.maps.LatLng(44.17415497,-93.99429368),
  new google.maps.LatLng(44.17229479,-93.99046948),
  new google.maps.LatLng(44.14333313,-93.96630185),
  new google.maps.LatLng(44.16684253,-93.98149047),
  new google.maps.LatLng(44.16684253,-93.98149047),
  new google.maps.LatLng(44.16082577,-94.01095562),
  new google.maps.LatLng(44.16082577,-94.01095562),
  new google.maps.LatLng(44.170467, -93.952415  ),
  new google.maps.LatLng(44.15594879,-93.97460123),
  new google.maps.LatLng(44.16687871,-93.95091051),
  new google.maps.LatLng(44.16689065,-93.96429224),
  new google.maps.LatLng(44.15194203,-93.98917575),
  new google.maps.LatLng(44.15188495,-93.9893414 ),
  new google.maps.LatLng(44.15188495,-93.9893414 ),
  new google.maps.LatLng(44.16430066,-94.00189447),
  new google.maps.LatLng(44.16336667,-94.00275586),
  new google.maps.LatLng(44.16619471,-94.00009822),
  new google.maps.LatLng(44.16805607,-93.99829965),
  new google.maps.LatLng(44.16137229,-94.00468017),
  new google.maps.LatLng(44.16137229,-94.00468017),
  new google.maps.LatLng(44.16137229,-94.00468017),
  new google.maps.LatLng(44.16898702,-93.99739756),
  new google.maps.LatLng(44.15983546,-94.01045907),
  new google.maps.LatLng(44.15496073,-93.99717423),
  new google.maps.LatLng(44.15490349,-94.03018933),
  new google.maps.LatLng(44.16678705,-93.9819059 ),
  new google.maps.LatLng(44.1650742, -93.98187282),
  new google.maps.LatLng(44.14488189,-93.99932594),
  new google.maps.LatLng(44.15029921,-93.9993737 ),
  new google.maps.LatLng(44.17211899,-93.99826299),
  new google.maps.LatLng(44.1627241, -94.007249  ),
  new google.maps.LatLng(44.16272411,-94.007249  ),
  new google.maps.LatLng(44.16225323,-93.98496813),
  new google.maps.LatLng(44.15733918,-93.99210192),
  new google.maps.LatLng(44.14503799,-93.98424099),
  new google.maps.LatLng(44.15597636,-93.95413255),
  new google.maps.LatLng(44.15598575,-93.97251274),
  new google.maps.LatLng(44.14623852,-94.0074344 ),
  new google.maps.LatLng(44.1412893, -93.9898109 ),
  new google.maps.LatLng(44.159991, -93.96169499),
  new google.maps.LatLng(44.17492735,-93.99552931),
  new google.maps.LatLng(44.16688964,-93.96977386),
  new google.maps.LatLng(44.16688964,-93.96977386),
  new google.maps.LatLng(44.16046131,-94.01412064),
  new google.maps.LatLng(44.14499513,-93.98929352),
  new google.maps.LatLng(44.14499513,-93.98929352),
  new google.maps.LatLng(44.14499513,-93.98929352),
  new google.maps.LatLng(44.16332483,-94.01883622),
  new google.maps.LatLng(44.16342465,-94.00830958),
  new google.maps.LatLng(44.17754391,-93.96872852),
  new google.maps.LatLng(44.17305899,-93.99734899),
  new google.maps.LatLng(44.16014152,-94.01533319),
  new google.maps.LatLng(44.18141005,-93.95763338),
  new google.maps.LatLng(44.16687697,-93.94907195),
  new google.maps.LatLng(44.15993206,-94.02028691),
 
];
var markers = [];
var iterator = 0;


            function initializeMap()
            {
			
			var styles = [
				{
				  "stylers": [
				  { "visibility": "on" },
				  { "saturation": -97 },
				  { "hue": "#00ff33" },
				  { "gamma": 0.08 },
				  { "lightness": 21 }
				]
			  },{
				"featureType": "water",
				"stylers": [
				  { "hue": "#0099ff" },
				  { "gamma": 1.04 },
				  { "lightness": 2 },
				  { "saturation": 19 }
				]
			  },{
				"elementType": "labels.text.fill",
				"stylers": [
				  { "visibility": "on" },
				  { "weight": 1.9 },
				  { "lightness": 100 }
				]
			  },{
				"elementType": "labels.text.stroke",
				"stylers": [
				  { "lightness": -100 }
				  ]
				}
			  ];
			var styledMap = new google.maps.StyledMapType(styles,
				{name: "Styled Map"});
				
            var mapOptions = {
                   zoom: 14,
                   center: mapCenter,
                   mapTypeControlOptions: {
					mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.ROADMAP, 'map_style']
                 }
				};
			map = new google.maps.Map(document.getElementById('map_canvas'),
				mapOptions);
				map.mapTypes.set('map_style', styledMap);
				map.setMapTypeId('map_style');
				
			
			var pointArray = new google.maps.MVCArray(taxiData);
			heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });
  heatmap.setMap(map);
  }
function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.setOptions({
    gradient: heatmap.get('gradient') ? null : gradient
  });
}

function changeRadius() {
  heatmap.setOptions({radius: heatmap.get('radius') ? null : 100});
}

function changeOpacity() {
  heatmap.setOptions({opacity: heatmap.get('opacity') ? null : 0.2});
}

				
				
var existingCameraLocs = [
  new google.maps.LatLng(44.166825203822981, -94.004324822725707),
  new google.maps.LatLng(44.174500363307857, -94.000903239659522),
  new google.maps.LatLng(44.146292506035202, -93.993104993218353),
  new google.maps.LatLng(44.146311375457820, -93.993126483144579),
  new google.maps.LatLng(44.163709974890644, -94.006452349528558),
  new google.maps.LatLng(44.163792845128711, -94.006103809373897),
  new google.maps.LatLng(44.167892953859692, -93.993366333479656),
  new google.maps.LatLng(44.146971122893667, -93.997302005086581),
  new google.maps.LatLng(44.174581912320214, -94.000779632611625),
  new google.maps.LatLng(44.175602505162722, -94.000898509429078),
  new google.maps.LatLng(44.167654365651565, -94.003156734178845),
  new google.maps.LatLng(44.163840719124977, -94.002575529553965),
  new google.maps.LatLng(44.163796683697740, -94.006660298633236),
  new google.maps.LatLng(44.164067986855258, -94.006148672101475),
  new google.maps.LatLng(44.164494865488997, -93.950178122834245),
  new google.maps.LatLng(44.164499050859646, -93.951049187285747),
  new google.maps.LatLng(44.173304764579020, -93.955851271748540),
  
];    
var image = {
    url: 'images/marker.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(22, 40),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 40)
  };
var blue = {
    url: 'images/blue2.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(17, 17),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 17),
	
	scaledsize: new google.maps.Size(17, 17)
  };  
var shape = {
      coord: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
  };
var shapeblue = {
      coord: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
  };  
function drop() {
  for (var i = 0; i < existingCameraLocs.length; i++) {
    setTimeout(function() {
      addMarker()? null : map;
    }, i * 50);
  }
}

function addMarker() {
  markers.push(new google.maps.Marker({
    position: existingCameraLocs[iterator],
    map: map,
	icon: image,
    shape: shape,
    draggable: false,
    animation: google.maps.Animation.DROP
  }));
  iterator++;
}

            function locError(error) {
                // the current position could not be located
                alert("The current position could not be found!");
            }

            function setCurrentPosition(pos) {
                currentPositionMarker = new google.maps.Marker({
				    flat: true,
					icon: blue,
                    map: map,
					optimized: false,					
					shape: shapeblue,
                    position: new google.maps.LatLng(
                        pos.coords.latitude,
                        pos.coords.longitude
                    ),
                    title: 'I might be here',
					visible: true
                });
                map.panTo(new google.maps.LatLng(
                        pos.coords.latitude,
                        pos.coords.longitude
                    ));
            }

            function displayAndWatch(position) {
                // set current position
                setCurrentPosition(position);
                // watch position
                watchCurrentPosition();
            }

            function watchCurrentPosition() {
                var positionTimer = navigator.geolocation.watchPosition(
                    function (position) {
                        setMarkerPosition(
                            currentPositionMarker,
                            position,
							{maximumAge:3000, timeout:5000, enableHighAccuracy:true}
                        );
                    });
            }

            function setMarkerPosition(marker, position) {
                marker.setPosition(
                    new google.maps.LatLng(
                        position.coords.latitude,
                        position.coords.longitude)
                );
            }

            function initLocationProcedure() {
                initializeMap();
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(displayAndWatch, locError);
                } else {
                    alert("Your browser does not support the Geolocation API");
                }
            }



			$(document).ready(function() {
                initLocationProcedure();
				changeRadius();
            });


        