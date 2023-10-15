export interface MovieSearchResponse {
  serverTime: number;
  meta: Meta;
  data: Data;
  pageData: PageData;
}

export interface Meta {
  movies: Movie[];
  filterBuckets: FilterBuckets;
  amenities: Amenity[];
  cinemas: Cinema[];
  filterData: FilterData;
}

export interface Movie {
  id: string;
  frmtId: string;
  name: string;
  imgPath: string;
  appImgPath: string;
  cvrPath: string;
  appCvrPath: string;
  thumbnail: any;
  edgeBanner: string;
  trailer: string;
  censor: string;
  duration: number;
  grn: string[];
  scrnFmt: string;
  sndFmt: string;
  rnr: Rnr;
  isNew: boolean;
  imxImgUrl: any;
  contentId: number;
  label: string;
  lang: string;
}

export interface Rnr {
  hasUReview: number;
  hasContent: number;
}

export interface FilterBuckets {
  timeBuckets: TimeBucket[];
  priceBuckets: PriceBucket[];
  showTimeBuckets: ShowTimeBucket[];
}

export interface TimeBucket {
  sTime: string;
  eTime: string;
  desc: string;
  dText: string;
  desc1: string;
}

export interface PriceBucket {
  min: string;
  max: string;
  desc: string;
}

export interface ShowTimeBucket {
  sTime: string;
  eTime: string;
  desc: string;
  dText: string;
  desc1: string;
}

export interface Amenity {
  id: number;
  name: string;
  rank: number;
}

export interface Cinema {
  id: number;
  pid: number;
  name: string;
  address: string;
  pincode: string;
  lat: number;
  lon: number;
  cityId: number;
  appCovrImgUrl: string;
  covrImgUrl: string;
  fnb: number;
  mTkt: number;
  bCode: string;
  sTop: number;
  isMerchantCancellable: number;
  cinemaLogoUrl: string;
  cinemaVideoUrl: string;
  appCoverVideoUrl: string;
  webCoverVideoUrl: string;
  amenities?: Amenities;
  promos: any;
  chainKey: string;
  contentId: number;
  theatreGroupName: string;
  amenitiesOrder?: AmenitiesOrder[];
  carouselAttachments: CarouselAttachment[];
  isMapped: number;
  city_id: any;
  is_city_mapped: any;
  state: string;
  city: string;
  label: string;
  sessionCount: number;
}

export interface Amenities {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5"?: number;
  "6": number;
  "8"?: number;
  "25"?: number;
  "10"?: number;
  "19"?: number;
  "21"?: number;
  "7"?: number;
}

export interface AmenitiesOrder {
  id: number;
  rank: number;
  status: number;
}

export interface CarouselAttachment {
  type: string;
  assetPosition: number;
  appImageUrl: string;
  webImageUrl: string;
}

export interface FilterData {
  minSTime: string;
  maxSTime: string;
  minPrice: number;
  maxPrice: number;
  premium: boolean;
  freeSeats: boolean;
  groupSeats: boolean;
  tokenFeeSeats: boolean;
  scnFrmts: string[];
  sndFrmts: string[];
  mLangs: string[];
  genres: string[];
}

export interface Data {
  pageSize: number;
  cinemasOrder: number[];
  sessionDates: string[];
}

export interface PageData {
  sessions: Sessions;
}

export interface Sessions {
  "1007054": N1007054[];
  "30149": N30149[];
  "3910": N3910[];
  "1011528": N1011528[];
  "3943": N3943[];
  "3945": N3945[];
  "1011174": N1011174[];
  "1011909": N1011909[];
  "3981": N3981[];
  "3950": N3950[];
  "3953": N3953[];
  "3955": N3955[];
  "3956": N3956[];
  "25044": N25044[];
  "9399": N9399[];
  "3993": N3993[];
  "41434": N41434[];
  "3964": N3964[];
  "42175": N42175[];
}

export interface N1007054 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N30149 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area2[];
  total: number;
  avail: number;
  audi: string;
  premium: number;
  premiumLabel: string;
  tFeePkupTime: number;
  sType: number;
  tFee: number;
  grpSeats: number;
  maxTkt: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area2 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N3910 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area3[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area3 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N1011528 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area4[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
  audi?: string;
  premium?: number;
  tFeePkupTime?: number;
  sType?: number;
  tFee?: number;
  grpSeats?: number;
  maxTkt?: number;
}

export interface Area4 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N3943 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area5[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area5 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N3945 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area6[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area6 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N1011174 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area7[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area7 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N1011909 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area8[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area8 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N3981 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area9[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area9 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N3950 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area10[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area10 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N3953 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area11[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area11 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N3955 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area12[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area12 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N3956 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area13[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
  audi?: string;
  premium?: number;
  premiumLabel?: string;
  tFeePkupTime?: number;
  sType?: number;
  tFee?: number;
  grpSeats?: number;
  maxTkt?: number;
}

export interface Area13 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N25044 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area14[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area14 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N9399 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area15[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
  audi?: string;
  premium?: number;
  tFeePkupTime?: number;
  sType?: number;
  tFee?: number;
  grpSeats?: number;
  maxTkt?: number;
}

export interface Area15 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N3993 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area16[];
  total: number;
  avail: number;
  audi?: string;
  premium?: number;
  premiumLabel?: string;
  tFeePkupTime?: number;
  sType?: number;
  tFee?: number;
  grpSeats?: number;
  maxTkt?: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area16 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N41434 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area17[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area17 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N3964 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area18[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
  audi?: string;
  premium?: number;
  premiumLabel?: string;
  tFeePkupTime?: number;
  sType?: number;
  tFee?: number;
  grpSeats?: number;
  maxTkt?: number;
}

export interface Area18 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}

export interface N42175 {
  sid: string;
  pid: number;
  pkey: string;
  cid: number;
  mid: string;
  fid: string;
  showTime: string;
  closeTime: string;
  mandatoryItems: any[];
  areas: Area19[];
  total: number;
  avail: number;
  lang: string;
  scrnFmt: string;
  sndFmt: string;
  gnrs: string[];
  statusColor: string;
}

export interface Area19 {
  code: string;
  label: string;
  typeCode: string;
  sType: string;
  sAvail: number;
  sTotal: number;
  price: number;
  statusColor: string;
}
