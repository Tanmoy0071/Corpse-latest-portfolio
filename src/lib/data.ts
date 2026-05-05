export type Page =
  | 'home' | 'compete' | 'roster' | 'about'
  | 'privacy' | 'terms' | 'fairplay' | 'contact'
  | 'account-management' | 'account-suspension' | 'arena-terms'
  | 'guild-policy' | 'ip-copyright' | 'kyc-policy'
  | 'signout-policy' | 'transaction-policy';

export interface RosterEntry {
  rank: number;
  name: string;
  handle: string;
  score: number;
  wins: number;
  region: string;
  delta: number;
  status: 'live' | 'active' | 'done';
}

export interface Event {
  id: string;
  round: string;
  name: string;
  time: string;
  slots: string;
  live?: boolean;
}

export interface Feature {
  num: string;
  title: string;
  desc: string;
  svgPath: string;
}

export interface Stat {
  count: number;
  suffix?: string;
  label: string;
}

export const ROSTER: RosterEntry[] = [
  { rank:1,  name:'Ariadne Voss',   handle:'@avoss',     score:2847, wins:47, region:'EU',    delta:+124, status:'live' },
  { rank:2,  name:'Ren Takahashi',  handle:'@ren_t',     score:2790, wins:44, region:'APAC',  delta:+88,  status:'live' },
  { rank:3,  name:'Marcus Field',   handle:'@mfield',    score:2744, wins:41, region:'NA',    delta:-12,  status:'done' },
  { rank:4,  name:'Yuki Sato',      handle:'@y_sato',    score:2698, wins:38, region:'APAC',  delta:+56,  status:'active' },
  { rank:5,  name:'Dom Ferreira',   handle:'@domf',      score:2601, wins:36, region:'LATAM', delta:-34,  status:'done' },
  { rank:6,  name:'Priya Nair',     handle:'@p_nair',    score:2558, wins:34, region:'APAC',  delta:+72,  status:'active' },
  { rank:7,  name:'Cael Morgan',    handle:'@cael_m',    score:2490, wins:31, region:'NA',    delta:+18,  status:'done' },
  { rank:8,  name:'Sofia Elander',  handle:'@sofiae',    score:2414, wins:29, region:'EU',    delta:-8,   status:'done' },
  { rank:9,  name:'Luca Bianchi',   handle:'@lbianchi',  score:2388, wins:27, region:'EU',    delta:+44,  status:'active' },
  { rank:10, name:'Hana Park',      handle:'@hpark',     score:2311, wins:25, region:'APAC',  delta:+9,   status:'done' },
  { rank:11, name:'Theo Reeves',    handle:'@treeves',   score:2270, wins:23, region:'NA',    delta:-21,  status:'done' },
  { rank:12, name:'Noa Silveira',   handle:'@nsilveira', score:2198, wins:22, region:'LATAM', delta:+33,  status:'active' },
];

export const EVENTS: Event[] = [
  { id:'winter-invitational', round:'S3 · Round 08', name:'Winter Invitational — Open Bracket', time:'Live now',       slots:'104/128 slots filled', live:true },
  { id:'pacific-regional',    round:'S3 · Round 07', name:'Pacific Regional Qualifier',          time:'Today 18:00',   slots:'41/64 slots' },
  { id:'corps-classic',       round:'S3 · Round 06', name:'Corps Classic — All Stars',            time:'Tomorrow 14:00',slots:'18/32 slots' },
  { id:'underground-circuit', round:'S3 · Round 05', name:'Underground Circuit Vol. 4',           time:'Fri 20:00',     slots:'87/256 slots' },
];

export const HOME_EVENTS: Event[] = [
  { id:'winter-invitational', round:'S3 · Round 08', name:'Winter Invitational — Open Bracket', time:'128 competing',        slots:'', live:true },
  { id:'pacific-regional',    round:'S3 · Round 07', name:'Pacific Regional Qualifier',          time:'Today 18:00 · 64 slots', slots:'' },
  { id:'corps-classic',       round:'S3 · Round 06', name:'Corps Classic — All Stars',            time:'Tomorrow 14:00 · 32 slots', slots:'' },
  { id:'underground-circuit', round:'S3 · Round 05', name:'Underground Circuit Vol. 4',           time:'Fri 20:00 · 256 slots', slots:'' },
];

export const FEATURES: Feature[] = [
  { num:'01', title:'Structured brackets',   desc:'Single and double elimination formats with automated seeding, scheduling, and results tracking.', svgPath:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>' },
  { num:'02', title:'Global roster',         desc:'Compete against verified athletes from every region. Rankings updated in real time after every round.', svgPath:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
  { num:'03', title:'Live results',          desc:'Match scores, deltas, and standings broadcast live. Every point matters. Every moment tracked.', svgPath:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
  { num:'04', title:'Season structure',      desc:'Organised seasons with qualifiers, regional rounds, and a championship finale. Clear paths. Real stakes.', svgPath:'<rect x="3" y="3" width="18" height="18" rx="0"/><path d="M3 9h18"/><path d="M9 21V9"/>' },
  { num:'05', title:'Real-time scheduling',  desc:'Automated match scheduling across time zones. Never miss a round. Check-in 30 minutes before start.', svgPath:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
  { num:'06', title:'Verified identities',   desc:'Every competitor is verified. Rankings are clean. Results are real. The arena is fair.', svgPath:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
];

export const HOME_STATS: Stat[] = [
  { count:3841, label:'Competitors' },
  { count:47,   label:'Active rounds' },
  { count:12,   label:'Seasons run' },
  { count:98.4, suffix:'%', label:'Uptime' },
  { count:128,  label:'Slots per bracket' },
];

export const ROSTER_STATS: Stat[] = [
  { count:3841, label:'Total competitors' },
  { count:47,   label:'Active rounds' },
  { count:28,   label:'Countries' },
  { count:12,   label:'Seasons complete' },
];

export const MARQUEE_ITEMS_HOME = ['Compete','Win','Rise','Corps Arena','Season 3','Enter the Arena','Built for competition','Open bracket','Global roster'];
export const MARQUEE_ITEMS_ABOUT = ['Compete','Integrity','Discipline','Corps Arena','Built for winners','No excuses','Global competition'];

export const VALUES = [
  { num:'01', title:'Integrity',  desc:'Every result is verified. Every ranking is earned. The arena is fair — or it\'s nothing.' },
  { num:'02', title:'Discipline', desc:'Check-ins are strict. Schedules are kept. Consistency is the only path to the top.' },
  { num:'03', title:'Precision',  desc:'Every system we build is tight. Every round is tracked to the second. Details matter.' },
  { num:'04', title:'Respect',    desc:'Competitors come from everywhere. The arena is global. Every participant earns their place.' },
];

export const TEAM = [
  { initial:'A', name:'Alex Chen',       role:'Founder · CEO' },
  { initial:'M', name:'Maya Torres',     role:'Head of Competition' },
  { initial:'R', name:'Riku Yamamoto',   role:'Lead Engineer' },
  { initial:'S', name:'Saoirse Blake',   role:'Design Director' },
];
