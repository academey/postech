let charMap = {
    a: 'y',
    b: 'i',
    c: 'm',
    d: 'j',
    e: 't',
    f: 'h',

    g: 'e',
    h: 'g',
    i: 'n',
    j: 'l',
    k: 'p',
    l: 'a',
    m: 'c',
    n: 'z',
    o: 'u',
    p: 'o',
    q: 'w',
    r: 'v',
    s: 'q',
    t: 'f',
    u: 'r',
    v: 'b',
    w: 'k',
    x: 'x',
    y: 'd',
    z: 's'
  };
  abcdefghijklmnopqrstuvwxyz


  yimjthegnlpaczuowvqfrbkxds
  const str = "tpu efg tbuze ebcg zbimg kugzbygie hgpuhg f.q. vozf'z 1989 pttgu ep hguclia tpu l \"klueiguzfbk bi jglyguzfbk,\" efgug bz l ugljbzebm mflimg efle hgucliz liy lcgubmliz qbjj mpcg ephgefgu lz pig. efle pkkpueoibea iggyz ep vg zgbngy ouhgieja, lz be qbjj gilvjg efg ugvobjybih pt l ugzbjbgie tugg qpujy.\n" +
    "qfbjg goupkgliz flrg gidpagy vjlcbih zommgzzbrg lcgubmli jglyguz tpu eulizlejliebm ybzmpuy, lz grbygie, tpu bizelimg, bi efg vuglwypqi pt eulizlejliebm euoze youbih efg pvlcl-gul izl zippkbih bi goupkg, efga ljj epp ptegi tpuhge l zbckjg tlme.\n" +
    "efgbu pqi jlegie lieb-lcgubmlibzc liy ybzeuoze pt fluy kpqgu flz kugrgiegy l ugzouhgimg pt l oibegy lejliebm qpujy, doze lz comf lz flrg lcgubmli lmebpiz.\n" +
    "lmmpuybih ep l 2019 zourga, l cldpubea pt hgucliz zflukja ybzlhuggy qbef lcgubmliz vpef prgu cbjbelua zkgiybih liy efgbu qbjjbihigzz ep ygtgiy ilep ljjbgz lhlbize uozzbl, mpimjoybih efle hgucli-lcgubmli ugjlebpiz qgug bi ybug zeulbez.\n" +
    "bi efg kugrbpoz aglu, zgrgi poe pt 10 pt hgucliz ygzbugy cpug tpugbhi kpjbma biygkgiygimg tupc efg oz, ljj efg qfbjg qbzfbih mjpzgu mppkgulebpi qbef uozzbl.\n" +
    "efg ilumbzzbzc pt cbipu eulizlejliebm ybttgugimgz zfbibih efupohf fgug muglegy l ybzoibegy tugg qpujy, qfbmf uozzbli kugzbygie rjlybcbu koebi, efg eljbvli, kugzbygie xb pt mfbil, liy clia pefguz flrg uoefjgzzja gxkjpbegy.\n" +
    "grgu zbimg efg uojgz-vlzgy jbvgulj qpujy puygu zeluegy ep vg bi tugg tljj, wugcjbi-ljbhigy efbiw eliwz flrg vggi gxkjpubih fpq uozzbl mli gxkjpbe efg igq lilumfa bi qpujy lttlbuz.\n" +
    "koebi'z qlu lhlbize owulbig bz efoz ipe pija l mljlcbea bi bez pqi ubhfe. be bz ljzp l zbhi pt qfle bz ep mpcg lmupzz efg hjpvg bi efg agluz lfgly. age qbef koebi euabih ep prguuoi owulbig liy efg zoyygi clzzbrg zfbte bi hgucli ygtgizg kpjbma, qfbmf zlq mflimgjjpu pjlt zmfpjn kupcbzg l 100-vbjjbpi-goup vppze bi zgmoubea zkgiybih, efgug tbiljja bz cpcgieoc bi hguclia liy gjzgqfgug bi goupkg tpu l 'klueiguzfbk bi jglyguzfbk' ep vg tpuhgy.\n" +
    "bi efg zflypq pt koebi'z qlu, l ugrbrgy eulizlejliebm ljjblimg efle jppwz vgapiy efg bccgybleg mubzbz coze gcguhg. fgug'z fpq qg mli hge efgug.\n" +
    "efbz bz ipe l ebcg tpu jptea zkggmfgz lvpoe efg iggy tpu eulizlejliebm oibea. be bz l ebcg tpu ygmbzbrg liy bccgybleg lmebpi lbcgy le eouibih efg ebyg bi owulbig, tpjjpqgy va mpimugeg zegkz ep lyyugzz efg oiygujabih uglzpiz tpu efg ugmgie mlzmlyg pt hgpkpjbebmlj ybzlzeguz liy mpizgsogie mubzbz pt efg tugg qpujy.\n" +
    "bi efg zfpue eguc, goupkgliz liy lcgubmliz coze pkgi efg tjppyhlegz bi efgbu cbjbelua zokkpue tpu owulbig. efga coze hugleja vppze efg lvbjbea pt owulbibliz ep ygtgiy efgczgjrgz. fpqgrgu zbhibtbmlie efg hgucli ygmbzbpi ep zgiy 1,000 lieb-eliw upmwge jloimfguz liy 10,000 epiigz pt togj ep owulbig bz, mouugie jgrgjz pt cbjbelua lby lug jbwgja bizottbmbgie tpu owulbig ep zourbrg.\n" +
    "lcgubmliz liy goupkgliz ljzp iggy ep gckjpa zeuleghbm lcvbhobea epqluy uozzbl, efoz jglrbih koebi hogzzbih lz ep fpq tlu efga lug kugklugy ep hp ep ygegu fbc. bi zfpue, efga coze clwg efg kubmg pt mpiebiobih efg qlu tpu koebi kupfbvbebrgja fbhf, ljj qfbjg zeluebih l ybkjpclebm bibeblebrg poe pt l kpzbebpi pt zeugihef, lbcgy le vupwgubih l kglmg yglj.\n" +
    "pimg koebi'z qlu bz vupohfe ep li giy, goupkgliz liy lcgubmliz qbjj flrg ep vuglw uozzbl'z cljbhilie hgpkpjbebmlj kpqgu lz li giguha zokkjbgu -- ugzojebih tupc ljcpze 40% pt tpzzbj togj vgbih mpizocgy bi goupkg mpcbih tupc efg mpoieua -- qfbjg wggkbih efg yppu pkgi ep l ugtpucgy uozzbl.\n" +
    "efbz qbjj ugsobug efg zozelbigy bckpuelebpi pt lcgubmli jbsogtbgy ileoulj hlz liy, bi hguclia'z mlzg, efg egckpulua ugeoui ep l fbhfgu ugjblimg pi iomjglu kpqgu, ugrguzbih tpu efg cpcgie efg ygmbzbpi, elwgi ltegu efg 2011 towozfbcl ybzlzegu, ep kflzg be poe. liy efg hojt zelegz iggy ep clwg pbj ugzgurgz lrlbjlvjg.\n" +
    "age lcgubml liy goupkg mliipe zepk efgug. efga dpbieja iggy ep kupcpeg igq fayuphgi egmfipjpha liy bitulzeuomeoug. ep tlmbjbeleg efle, l mpccpi fayuphgi cluwge, mpccpi egmfipjphbmlj zeliyluyz tpu huggi fayuphgi, igq fayuphgi ugzglumf liy ygrgjpkcgie bitulzeuomeoug liy l huggi fayuphgi toiy iggy ep vg muglegy.\n" +
    "qfbjg efg bccgybleg efugle efg tugg qpujy tlmgz bz pig pt l mpirgiebpilj qlu, qbef mavguqlu elmebmz efupqi biep efg cbx, efg jpih-eguc hgp-gmpipcbmz ubzwz qg tlmg lug doze lz hulrg, lz qg bygiebtbgy qbef efg elzw tpumg pi efg toeoug pt eulizlejliebm ugjlebpiz le efg oibrguzbea pt vpii, pi qfbmf qg zgurgy.\n" +
    "efg oibegy zelegz, hguclia liy pefgu mpoieubgz pt efg tugg qpujy iggy ep mpcg ephgefgu ep dpbieja zgmoug zokkja upoegz, zokkja mflbiz, liy lmmgzz ep ulq clegubljz liy egmfipjphbgz. ep lby efle kupmgzz, qg ugmpccgiy efg gzelvjbzfcgie pt li gluja bygiebtbmlebpi liy qluibih bitulzeuomeoug va efg lcgubmli liy hgucli hprguicgiez, bi mjpzg mpjjlvpulebpi qbef ipi-zeleg lmepuz. efbz qbjj ljjpq tpu ubzwz ep kupzkgubea, biiprlebpi liy zgmoubea ep vg bygiebtbgy liy grljolegy efupohf ughojlu ugkpuez.\n" +
    "age, bi vobjybih l igq lejliebm qpujy, be qbjj ipe vg gipohf bt goupkg liy lcgubml pija ug-jglui fpq ep bygiebta liy ugzkpiy ep gxeguilj efuglez. doze lz bckpuelieja, qg iggy ep tpuhg igq vpiyz efle fpjy oz ephgefgu. efbz qbjj ugsobug l mjpzg eulizlejliebm mppkgulebpi liy mppuybilebpi pi eulyg, egmfipjpha, fgljef, zltgea, focli ubhfez liy kupkguea ubhfez, lz qgjj lz pi girbupicgielj liy biyozeublj lttlbuz, kluebmojluja efupohf biebcleg mppkgulebpi bi bieguilebpilj puhlibnlebpiz lmupzz efg vpluy.\n" +
    "qg iggy ep vubih vlmw ep jbtg leegckez ep zeubwg l mpckugfgizbrg liy tpuclj lhuggcgie vgeqggi efg goupkgli oibpi liy efg oibegy zelegz pi tugg eulyg, biiprlebpi, biyozeublj hppyz liy birgzecgie. lia zomf lhuggcgie iggyz ep vg grgi cpug lcvbebpoz efli efg eulizlejliebm eulyg liy birgzecgie klueiguzfbk fljegy oiygu ypiljy euock.\n" +
    "liy be zfpojy mpcg qbef efg kupzkgme pt qgjmpcbih ughbpiz vpuygubih efg zpoefgui lejliebm bi efg cgyboc eguc. qg ljzp kupkpzg efle igq bitulzeuomeoug vg zge ok lbcgy le efg gzelvjbzfcgie pt dpbie mjbcleg-ugjlegy ylel mpjjgmebpi.\n" +
    "age ojebclegja lia leegcke pt ugvobjybih l ugzbjbgie tugg qpujy, ugrpjrbih lupoiy l ugigqgy eulizlejliebm klueiguzfbk, qbjj ipe vg zozelbilvjg, oijgzz qg ugybzmprgu l igq zgizg pt mpccpi koukpzg.\n" +
    "lcgubmliz, hgucliz liy pefgu goupkgliz iggy ep jglui lhlbi ep tpmoz pi qfle oibegz efgc, ipe qfle zeliyz vgeqggi efgc. ep efle giy, qg iggy ep elmwjg efg coeolj bimpckugfgizbpi pt glmf pefgu efle flz hupqi prgu efg jlze hgigulebpi.\n" +
    "bi ugmgie agluz, lcgubmli oibrguzbebgz liy pefgu ugzglumf bizebeoebpiz flrg gxkgubgimgy l tljj pt gihlhgcgie qbef hguclia, liy bez fbzepua, gmpipca, mojeoug liy zpmbgea. hgucli gxkguebzg flz vggi ygmjbibih tpu zpcg ebcg lcpih oz ygmbzbpi-clwguz. fpqgrgu, efg oibegy zelegz liy hguclia qbjj pija vg lvjg ep vg \"klueiguz bi jglyguzfbk\" bt efga oiyguzeliy glmf pefgu.\n" +
    "qg efgugtpug ugmpccgiy efle tgygulj liy zeleg hprguicgiez, mflubelvjg tpoiylebpiz liy kubrleg ypipuz pi vpef zbygz pt efg lejliebm ep mpjjlvpuleg bi bizkbubih liy mp-toiybih efg gzelvjbzfcgie pt l igq bitulzeuomeoug pt gihlhgcgie qbef hguclia bi lcgubmli oibrguzbebgz liy efbiw eliwz. bi hguclia, cgliqfbjg, toiybih bz ugsobugy ep vppze efg eglmfbih pt zeuleghbm efbiwbih ep apoih hgucliz, lbcgy le eulbibih -- liy lkkugmblebih -- efg lue pt vljlimbih fluy liy zpte kpqgu bi efg ygtgizg pt tuggypc liy kglmg.\n" +
    "tbiljja, qg iggy l igq eulizlejliebm bibeblebrg lbcgy le muglebih igq kglmg vobjybih liy cpibepubih mlklmbea liy mlklvbjbea lupoiy efg qpujy. be bz pig efbih ep vubih qluz -- vg be efg pig bi owulbig pu efg clia mpitjbmez gjzgqfgug -- ep li giy. be qbjj vg lipefgu ep ugzepug euoze bi glmf pefgu, ep ugzkgme glmf pefgu'z ybhibea lhlbi liy ep vubih kgpkjg vlmw biep efg tpjy pt efg tugg qpujy. be qbjj vg efg elzw pt hgucliz liy lcgubmliz ep mpirga ep efg ugze pt efg qpujy efle efgbu klueiguzfbk bi jglyguzfbk bz ipe gxmjozbrg. be bz pkgi ep efg giebug tugg qpujy. be bz ybugmegy lhlbize efg koebiz pt efg qpujy, ipe lhlbize uozzbl.\n" +
    "\n";

  let result = "";
  for (var i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (charMap[char] != null) {
      result += charMap[char];
    } else {
      result += char;
    }
  }
  console.log("result is ")
  console.log(result);


  for (const [key, value] of Object.entries(charMap)) {
    console.log(`${key}: ${value}`);
  }