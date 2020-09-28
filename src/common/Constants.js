import enLocale from 'date-fns/locale/en-US';
import jaLocale from 'date-fns/locale/ja';

export const localeMap = {
    en: enLocale,
    ja: jaLocale,
};

Object.freeze(localeMap);

export const localeCancelLabelMap = {
    en: 'cancel',
    ja: 'キャンセル',
};

Object.freeze(localeCancelLabelMap);

export const localeHelperTextMap = {
    en: 'Invalid Date Format',
    ja: '無効な日付形式',
};

Object.freeze(localeHelperTextMap);

export const APIErrors = {
    badRequest: 'BAD_REQUEST',
    authExpired: 'AUTH_EXPIRED',
    permissionDenied: 'PERMISSION_DENIED',
    server: 'SERVER_ERROR',
    maitenance: 'MAINTENANCE_ERROR',
    network: 'NETWORK_ERROR',
};

Object.freeze(APIErrors);

export const Role = {
    admin: 2,
    viewer: 0,
    organizer: 1,
};

Object.freeze(Role);

export const viewerPerType = {
    disable: 0,
    onlyEvent: 1,
    onlySeminar: 2,
    bothType: 3,
};

Object.freeze(viewerPerType);

export const organizerPerType = {
    disable: 0,
    onlyEvent: 1,
    onlySeminar: 2,
    bothType: 3,
};

Object.freeze(organizerPerType);

export const boothType = {
    0: 'disable',
    1: 'small_zone',
    2: 'standard_zone',
    3: 'big_zone',
};

Object.freeze(boothType);

export const extension = {
    image: {
        accept: '.jpe, .jpg, .jpeg, .png',
        extRegex: /\.(?:(jpe?g?)|(png))$/g,
        size: 15,
    },
    video: {
        accept: '.mp4, .mov, .webm, .mkv, .wmv, .flv',
        extRegex: /\.(?:(mov)|(mp4)|(webm)|(mkv)|(wmv)|(flv))$/g,
        size: 2048,
    },
    audio: {
        accept: '.mp3, .aac, .flac',
        extRegex: /\.(?:(mp3)|(aac)|(flac))$/g,
        size: 2048,
    },
    document: {
        accept: '.docx, .txt, .pdf, .xls, .xlsx,',
        extRegex: /\.(?:(docx)|(txt)|(pdf)|(xls)|(xlsx))$/g,
        size: 15,
    },
};

Object.freeze(extension);

export const organizerType = {
    1: '展示会のみ',
    2: 'セミナーのみ',
    3: '展示会・セミナーの両方',
};

Object.freeze(organizerType);

export const statusType = {
    0: '承認待ち中',
    1: '承認済み',
    2: '拒否済み',
};

Object.freeze(statusType);

export const statusApprove = {
    AWAITING_APPROVAL: 0,
    APPROVED: 1,
    REJECTED: 2,
};

Object.freeze(statusApprove);

export const locationOption = {
    0: '',
    1: '日本',
    2: 'パキスタン',
    3: 'インド',
    4: 'ネパール',
    5: 'バングラデシュ',
    6: 'スリランカ',
    7: 'シャンマー',
    8: 'タイ',
    9: 'マレーシア',
    10: 'シンガポール',
    11: 'インドネシア',
    12: 'フィリピン',
    13: '香港',
    14: '韓国',
    15: 'モンゴル',
    16: 'ベトナム',
    17: '中国',
    18: 'カンボジア',
    19: 'ブータン',
    20: 'ラオス',
    21: 'マカオ',
    22: 'モルディブ',
    23: '東ティモール',
    24: '台湾',
    25: 'イラン',
    26: 'トルコ',
    27: 'シリア',
    28: 'レバノン',
    29: 'ヨルダン',
    30: 'イラク',
    31: 'クウェート',
    32: 'サウジアラビア',
    33: 'アフガニスタン',
    34: 'パレスチナ',
    35: 'イエメン',
    36: 'アラブ首長国連邦',
    37: 'バーレーン',
    38: 'オマーン',
    39: 'カタール',
    40: 'エジプト',
    41: 'スーダン',
    42: 'リビア',
    43: 'チュニジア',
    44: 'アルジェリア',
    45: 'マダガスカル',
    46: 'ケニア',
    47: 'タンザニア',
    48: 'コンゴ民主共和国',
    49: 'ナイジェリア',
    50: 'ガーナ',
    51: 'リベリア',
    52: 'ガボン',
    53: 'コンゴ共和国',
    54: 'カメルーン',
    55: 'ザンビア',
    56: 'コートジボワール',
    57: 'モロッコ',
    58: 'セネガル',
    59: 'エチオピア',
    60: 'ギニア',
    61: 'ウガンダ',
    62: 'ジンバブエ',
    63: '南アフリカ',
    64: 'モーリタニア',
    65: 'トーゴ',
    66: '中央アフリカ',
    67: 'ベナン',
    68: 'マラウイ',
    69: 'ギニアビサウ',
    70: 'エスワティニ',
    71: 'エリトリア',
    72: 'コモロ',
    73: 'ナミビア',
    74: 'ボツワナ',
    75: 'マリ',
    76: 'ニジェール',
    77: 'モーリシャス',
    78: 'レソト',
    79: 'モーシェル',
    80: 'ソマリア',
    81: 'モザンビーク',
    82: 'ルワンダ',
    83: 'シェラレオネ',
    84: 'ブルンジ',
    85: 'ジブチ',
    86: 'ガンビア',
    87: 'チャド',
    88: 'アンゴラ',
    89: 'カーボヴェルデ',
    90: 'サントメ・プリンシペ',
    91: '赤道ギニア',
    92: 'ブルキナファン',
    93: '南スーダン',
    94: 'オーストラリア',
    95: 'ニュージーランド',
    96: 'パプアニューギニア',
    97: 'フィジー',
    98: 'パラオ',
    99: 'マーシャル',
    100: 'ミクロネシア',
    101: 'サモア',
    102: 'トンガ',
    103: 'キリバス',
    104: 'ナウル',
    105: 'ソロモン諸島',
    106: 'ツバル',
    107: 'バヌアツ',
    108: 'クック諸島',
    109: 'ニウエ',
    110: 'カナダ',
    111: 'アメリカ合衆国',
    112: 'メキシコ',
    113: 'グアテマラ',
    114: 'エルサルバドル',
    115: 'ニカラグア',
    116: 'コスタリカ',
    117: 'キューバ',
    118: 'ドミニカ共和国',
    119: 'ブラジル',
    120: 'パラグアイ',
    121: 'ウルグアイ',
    122: 'アルゼンチン',
    123: '地理',
    124: 'ボリビア',
    125: 'ペルー',
    126: 'エクアドル',
    127: 'コロンビア',
    128: 'ベネズエラ',
    129: 'ホンジュラス',
    130: 'パナマ',
    131: 'ジャマイカ',
    132: 'トリニダード・トバゴ',
    133: 'バハマ',
    134: 'アンティグア・バーブーダ',
    135: 'バルバドス',
    136: 'ドミニカ国',
    137: 'グレナダ',
    138: 'セントクリストファー・ネーヴィス',
    139: 'セントルシア',
    140: 'セントビンセント',
    141: 'スリナム',
    142: 'ガイアナ',
    143: 'ブリーズ',
    144: 'ハイチ',
    145: 'アイス安堵',
    146: 'フィンランド',
    147: 'スウェーデン',
    148: 'ノルウェー',
    149: 'デンマーク',
    150: 'アイルランド',
    151: '英国',
    152: 'ベルギー',
    153: 'ルクセンブルク',
    154: 'オランダ',
    155: 'ドイツ',
    156: 'フランス',
    157: 'スペイン',
    158: 'ポルトガル',
    159: 'イタリア',
    160: 'マルタ',
    161: 'ギリシャ',
    162: 'オーストリア',
    163: 'スイス',
    164: 'ポーランド',
    165: 'チェコ',
    166: 'ハンガリー',
    167: 'ルーマニア',
    168: 'ブルガリア',
    169: 'アルバニア',
    170: 'ロシア',
    171: 'エストニア',
    172: 'ラトビア',
    173: 'リトアニア',
    174: 'スロバキア',
    175: 'ウクライナ',
    176: 'ウズベキスタン',
    177: 'カザフスタン',
    178: 'ベラルーシ',
    179: 'クロアチア',
    180: 'スロベニア',
    181: '北マケドニア',
    182: 'ボスニア・ヘルツェゴビナ',
    183: 'アンドラ',
    184: 'セルビア',
    185: 'モンテネグロ',
    186: 'コソボ',
    187: 'バチカン',
    188: 'キルギス',
    189: 'アゼルバイジャン',
    190: 'ジョージア',
    191: 'タジキスタン',
    192: 'トルクメニスタン',
    193: 'アルメニア',
    194: 'モルドバ',
    195: 'キプロス',
    196: 'サンマリノ',
    197: 'モナコ',
    198: 'リヒテンシュタイン',
};

Object.freeze(locationOption);

export const jobOption = {
    0: '',
    1: '製造業１（電気・機械・電子精密）',
    2: '製造学２（化学・新素材）',
    3: '製造学３（食品・飲料）',
    4: 'IT・コンピューター・情報通信',
    5: '農学・林学・漁学',
    6: '鉱学・エネルギー・インフラ',
    7: '建設・不動産・オフィス',
    8: '流通・運輸・販売',
    9: '教育・出版・マスコミ',
    10: '医療・福祉',
    11: '外食・宿伯・旅行・娯楽',
    12: '金融・保険',
    13: '官公庁',
    14: 'その他',
};

Object.freeze(jobOption);

export const purposeOption = {
    0: '',
    1: '導入したい商品・サービス探し',
    2: '技術開発でのヒント探し',
    3: '開発商品の部品・機械探し',
    4: '購入商品・サービスを見るため',
    5: '情報収集・資料集め',
    6: '取引企業への挨拶',
    7: '担当者と直接に聞きたい事がある',
    8: '目的なくぶりらと',
};

Object.freeze(purposeOption);

export const optionRegist = { event: '1', sminarAndEvent: '3', seminar: '2' };

Object.freeze(optionRegist);

export const MEDIA_TYPE = {
    IMAGE: 0,
    AUDIO: 1,
    VIDEO: 2,
};

Object.freeze(MEDIA_TYPE);

export const BOOTH_TYPE = {
    DISABLE: 0,
    SMALL: 1,
    STANDARD: 2,
    BIG: 3,
};

Object.freeze(BOOTH_TYPE);

export const SEMINAR_STATUS_VALUE = {
    NOTSTART: 0,
    START: 1,
    RUNING: 2,
    FINISH: 3,
};

Object.freeze(SEMINAR_STATUS_VALUE);

export const SEMINAR_STATUS_TEXT = {
    0: '未開催',
    1: 'もうすぐ開催',
    2: '開催中',
    3: '終了済み',
};

Object.freeze(SEMINAR_STATUS_TEXT);

export const PAID = {
    UNPAID: '未支払い',
    PAIDED: '支払い済み',
};

Object.freeze(PAID);

export const EVENT_EFFECT_DURATION = {
    BEFORE: 14,
    AFTER: 7,
};

Object.freeze(EVENT_EFFECT_DURATION);

export const SERVER_CHAR_LIMIT = {
    TEXT_FIELD: 500,
};

Object.freeze(SERVER_CHAR_LIMIT);

export const LOCAL_STORAGE = {
    SELECTED_COMPANIES: 'selectedCompanyIDs',
};

Object.freeze(LOCAL_STORAGE);
