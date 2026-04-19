export interface TeamMember {
  name: string;
  designation: string;
  description: string;
  photo: string;
  movies?: string;
  shows?: string;
  linkedin?: string;
}

export const founders: TeamMember[] = [
  {
    name: 'Mahendra Singh Dhoni',
    designation: 'Founder',
    description: `Mahendra Singh Dhoni, Indian cricket team captain (2007-2016) and the current captain of the IPL team Chennai Super Kings and recipient of India's highest civilian honours such as the Padma Shri and the Padma Bhushan, MS Dhoni is known as 'Alpha' at Dhoni Entertainment and affectionately known as 'Mahi' by his fans.
    <br/><br/>
    Starting from the young age of 17, Dhoni went on to become one of the most recognised names in the Indian cricket history. Under his captaincy, India won the 2011 World Cup after a 28 years.
    <br/><br/>
    Although Dhoni has gone on to become a household name with regards to cricket, he doesn't let sport be the only thing that defines him. Dhoni was accorded the honorary rank of Lieutenant Colonel in 2011 and is a qualified paratrooper after having completed five parachute training jumps. He nurtures a deep respect and admiration for the work of the Indian army and visits his unit every year. And now Dhoni also made his foray into the entertainment business with his own production company, Dhoni Entertainment in 2019, as he believes that good stories can help bring positive change in society.`,
    photo: '/img/founder-msd.jpg',
  },
  {
    name: 'Sakshi Singh Dhoni',
    designation: 'Managing Director',
    description: `Alpha1 aka Sakshi Singh Dhoni is the Managing Director at Dhoni Entertainment. Being an avid watcher of all kinds of movies and content herself, Sakshi's vision is to entertain the audience with content that elevates their sensibilities.
    <br/><br/>
    She uses her management skills in getting together a dynamic, driven team and her congenial nature ensures a family-like environment in the company, making the team more dedicated and passionate. Sakshi is the backbone of the company.`,
    photo: '/img/founder-sakshi.jpg',
  },
];

export const team: TeamMember[] = [
  {
    name: 'Vikas Hasija',
    designation: 'Business Head',
    description: `With over a decade of experience in hospitality, production and brand management, Vikas Hasija has been a part of the core team since 2019. At Dhoni Entertainment, he is the Business Head.
    <br/><br/>
    Vikas plans and executes strategies to ensure that Dhoni Entertainment's goals are met. He also generates new business opportunities, manages various proposals and ensures processes are in place for the best outcome.`,
    photo: '/img/team-vikas.png',
    movies: `Avengers, Munna Bhai MBBS, After Earth`,
    shows: `Blacklist, Don't F**k With Cats, Walking Dead`,
    linkedin: 'https://in.linkedin.com/in/vikas-hasija-791a3a21',
  },
  {
    name: 'Priiyanshu Chopraa',
    designation: 'Creative Head',
    description: `Priiyanshu Chopraa is the Creative Head at Dhoni Entertainment and has been a part of the core team since 2019.
    <br/><br/>
    After over a decade of work in hospitality, sales and marketing, Priiyanshu knew her heart lay in the field of Entertainment.
    <br/><br/>
    She mainly handles Creative content production across various formats and genres, along with being involved in business development. She also looks at recruitment and HR at Dhoni Entertainment.`,
    photo: '/img/priyanshu-min.png',
    movies: `The Pursuit of Happiness, Hachiko, The Lord of the Rings, Zindagi na Milega Dobara`,
    shows: `Brooklyn 99, Killing Eve, The Blacklist, Succession, Scam 1992`,
    linkedin: 'https://www.linkedin.com/in/priiyanshu-chopraa-77084baa/',
  },
  {
    name: 'Nishit Desai',
    designation: 'Operations and Production Associate',
    description: `Nishit Desai is an Operations and Production Associate at Dhoni Entertainment and has been a part of the team since 2021.
    <br/><br/>
    Nishit was hired as an intern and quickly understood the culture and ethos of the Company to become a key player in the team.
    <br/><br/>
    He assists in coordination and execution of Production strategies.`,
    photo: '/img/nishit-min.png',
    movies: `Now You See me, Badmaash Company, Phir Hera Pheri`,
    shows: `Peaky Blinders, Inside Job, You.`,
    linkedin: 'https://www.linkedin.com/in/nishit-desai-b511a41b8',
  },
];
