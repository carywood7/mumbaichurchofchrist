export interface CommunityPage {
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  image: string;
  illustration?: boolean;
  indexable: boolean;
  answer: string;
  heading: string;
  sections: {
    title: string;
    text: string;
    scripture?: string;
    href?: string;
    label?: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  verse: string;
  reference: string;
  contacts?: boolean;
  events?: boolean;
  archive?: boolean;
  source?: string;
  sourceLabel?: string;
}

export const eventCards = [
  {
    slug: "ignite",
    title: "Ignite",
    category: "Christian youth camp",
    location: "Near Bengaluru, Karnataka",
    image: "/images/home/ignite.svg",
    description: "Explore faith, Scripture and Christian fellowship through the All India Camp for Church of Christ youth."
  },
  {
    slug: "prerna",
    title: "Prerna",
    category: "Bible quizzing",
    location: "Location to be announced",
    image: "/images/home/prerna.svg",
    description: "An opportunity to deepen Biblical knowledge through Bible quizzing and preparation."
  },
  {
    slug: "arise",
    title: "Arise",
    category: "Christian gathering",
    location: "Mumbai",
    image: "/images/home/arise.svg",
    description: "A Christian gathering in Mumbai. Confirm the programme and arrangements with the organizers."
  }
];

export const igniteArchive = [
  {year:"2026", title:"Sixth All India Camp", dates:"13–17 May 2026", venue:"Glorious Promised Land, Chikkaballapur"},
  {year:"2025", title:"Fight the Good Fight", dates:"28 May–1 June 2025", venue:"Glorious Promised Land"},
  {year:"2024", title:"This Is The Way", dates:"2–5 May 2024", venue:"Wings Elim Camp"},
  {year:"2023", title:"Be the Light", dates:"2023", venue:"Venue not listed here"},
  {year:"2019", title:"Let Your Light Shine", dates:"2–5 May 2019", venue:"Breakthrough, Bengaluru"},
  {year:"2018", title:"The first Ignite camp", dates:"26–29 April 2018", venue:"Ashirvanam Retreat Centre"}
];

export const communityPages: Record<string, CommunityPage> = {

  "events": {
    title: "Christian Events, Bible Quizzes and Youth Camps",
    eyebrow: "Faith beyond Sunday",
    headline: "Gather together. Grow in Christ.",
    description: "Discover Christian gatherings, Bible quizzes and youth camps connected with Churches of Christ in Mumbai and across India.",
    image: "/images/home/study.jpg",
    indexable: true,
    answer: "Explore Ignite, Prerna and Arise through our event directory. Upcoming dates will be listed once they are confirmed by the respective organizers.",
    heading: "Make fellowship part of your journey.",
    events: true,
    sections: [
      {
        title:"Learn together",
        text:"Prepare for Christian gatherings through Scripture reading, discussion and prayer.",
        scripture:"Acts 2:42",
        href:"/resources/bible-studies/",
        label:"Explore Bible studies"
      },
      {
        title:"Encourage one another",
        text:"Christian fellowship gives believers opportunities to strengthen one another in faith.",
        scripture:"Hebrews 10:24–25"
      },
      {
        title:"Remember previous gatherings",
        text:"Explore verified information about earlier Ignite camps.",
        href:"/events/archive/",
        label:"Browse past events"
      }
    ],
    faq: [
      {question:"Are any upcoming dates confirmed?",answer:"No upcoming dates are currently confirmed on this directory. Check the individual event page and organizer before making arrangements."},
      {question:"Does Mumbai Church of Christ organize every listed event?",answer:"No. This directory shares information about Christian gatherings. Each event has its own organizers."},
      {question:"How can I participate?",answer:"Contact the respective organizers to confirm registration, eligibility, venue and travel arrangements."}
    ],
    verse:"And let us consider one another to provoke unto love and to good works.",
    reference:"Hebrews 10:24"
  },

  "ignite": {
    title:"Ignite — All India Church of Christ Youth Camp",
    eyebrow:"Christian youth camp",
    headline:"Ignite your faith.",
    description:"Learn about the Ignite All India Camp for Church of Christ youth near Bengaluru, its previous editions and organizer information.",
    image:"/images/home/ignite.svg",
    illustration:true,
    indexable:true,
    answer:"Ignite is a Christian youth camp overseen by Bangalore Central Church of Christ. The sixth camp took place from 13 to 17 May 2026 in Chikkaballapur, Karnataka. The next dates have not been confirmed.",
    heading:"Faith that shapes everyday life.",
    archive:true,
    sections:[
      {
        title:"Rooted in God's Word",
        text:"Previous camps have included Biblical teaching, discussions and activities that encourage young people to apply Scripture to their lives.",
        scripture:"1 Timothy 4:12"
      },
      {
        title:"Christian fellowship",
        text:"Ignite brings together young Christians from different congregations to learn and encourage one another.",
        scripture:"Hebrews 10:24–25"
      },
      {
        title:"Before registering",
        text:"Ask the organizers about age requirements, accommodation, fees, safeguarding and travel before making a booking."
      }
    ],
    faq:[
      {question:"Where is Ignite held?",answer:"Previous camps have taken place in and around Bengaluru. The 2026 camp was held at Glorious Promised Land in Chikkaballapur."},
      {question:"When is the next Ignite camp?",answer:"The next dates are not confirmed here. Refer to the organizer's website for announcements."},
      {question:"Who organizes Ignite?",answer:"The camp is conducted under the oversight of Bangalore Central Church of Christ."}
    ],
    verse:"Let no man despise thy youth; but be thou an example of the believers.",
    reference:"1 Timothy 4:12",
    source:"https://www.blrchurchofchrist.in/#ignite",
    sourceLabel:"Bangalore Central Church of Christ — Ignite"
  },

  "prerna": {
    title:"Prerna Bible Quiz — Christian Scripture Learning",
    eyebrow:"Learn the Scriptures",
    headline:"Study. Remember. Grow.",
    description:"Explore Prerna Bible quizzing and practical ways to prepare through careful Scripture reading and group study.",
    image:"/images/home/prerna.svg",
    illustration:true,
    indexable:false,
    answer:"Prerna encourages Bible learning through quizzing. Confirm the next edition, syllabus, eligibility and venue before preparing for a specific competition.",
    heading:"Prepare with purpose.",
    sections:[
      {
        title:"Read in context",
        text:"Read each chapter carefully. Understand its audience, setting and message before memorizing individual verses.",
        href:"/insights/biblical-studies/why-biblical-context-matters/",
        label:"Learn about Biblical context"
      },
      {
        title:"Study together",
        text:"Ask questions, compare notes and discuss the meaning of the passages with fellow learners.",
        scripture:"Acts 17:11"
      },
      {
        title:"Live what you learn",
        text:"The purpose of Scripture study is not merely remembering facts but growing in faithful obedience to God.",
        scripture:"James 1:22"
      }
    ],
    faq:[
      {question:"Which Bible books should I prepare?",answer:"The next official syllabus has not been verified. Confirm it with the organizers."},
      {question:"When is the next quiz?",answer:"Dates and registration details are awaiting confirmation."},
      {question:"Can I prepare with a congregation?",answer:"Contact your local congregation to ask about group Bible study."}
    ],
    verse:"Thy word is a lamp unto my feet, and a light unto my path.",
    reference:"Psalm 119:105",
    source:"https://preranabiblequiz.com/",
    sourceLabel:"Previously supplied Prerna website — availability unverified"
  },

  "arise": {
    title:"Arise — Christian Gathering in Mumbai",
    eyebrow:"Fellowship in Mumbai",
    headline:"Arise. Walk in faith.",
    description:"Discover Arise, a Christian gathering in Mumbai, and connect with local congregations for further information.",
    image:"/images/home/arise.svg",
    illustration:true,
    indexable:false,
    answer:"Arise is a Christian gathering in Mumbai. Its next date, venue, programme and registration arrangements are awaiting confirmation.",
    heading:"Prepare your heart for fellowship.",
    sections:[
      {
        title:"Prayer",
        text:"Make time for prayer and seek God's wisdom as you prepare to meet fellow Christians.",
        scripture:"Colossians 4:2"
      },
      {
        title:"Scripture",
        text:"Continue reading the Bible and reflecting on how its teaching applies to your life.",
        href:"/resources/devotionals/",
        label:"Explore devotionals"
      },
      {
        title:"Connect locally",
        text:"Ask your local congregation whether further information about Arise is available.",
        href:"/congregations/",
        label:"Find a congregation"
      }
    ],
    faq:[
      {question:"Where will Arise take place?",answer:"The next venue has not been confirmed."},
      {question:"Can I register now?",answer:"No verified registration arrangements are available on this page."}
    ],
    verse:"Awake thou that sleepest, and arise from the dead, and Christ shall give thee light.",
    reference:"Ephesians 5:14"
  },

  "archive": {
    title:"Past Christian Events and Ignite Camp Archive",
    eyebrow:"Remembering previous gatherings",
    headline:"Remember. Reflect. Grow.",
    description:"Explore previous Ignite Church of Christ youth camps held between 2018 and 2026, with verified historical dates and organizer references.",
    image:"/images/home/scriptures.jpg",
    indexable:true,
    answer:"The archive currently contains six Ignite camps documented by Bangalore Central Church of Christ. Prerna and Arise historical records will be added when verified.",
    heading:"Learning from past gatherings.",
    archive:true,
    sections:[
      {
        title:"Verified historical records",
        text:"The Ignite archive draws its dates, camp names and available venue information from the organizer's website."
      },
      {
        title:"Continue learning",
        text:"Explore Bible study materials between gatherings.",
        href:"/resources/",
        label:"Explore Biblical resources"
      }
    ],
    faq:[
      {question:"Can I register for these events?",answer:"No. The events in this archive have already taken place."},
      {question:"Where are the event photographs?",answer:"Visit the organizer's website for available photographs and recaps. Images will only be added locally when publication rights are confirmed."}
    ],
    verse:"Remember therefore how thou hast received and heard, and hold fast.",
    reference:"Revelation 3:3",
    source:"https://www.blrchurchofchrist.in/#ignite",
    sourceLabel:"Official Ignite historical records"
  },

  "plan-your-visit": {
    title:"Sunday Worship & Church Timings in Mumbai",
    eyebrow:"Your first visit",
    headline:"Come as you are.",
    description:"Find Sunday worship services, church timings and meeting locations in Mumbai and Navi Mumbai. Learn what to expect when visiting a Church of Christ.",
    image:"/images/home/mumbai.jpg",
    indexable:true,
    contacts:true,
    answer:"You are welcome to visit a local Church of Christ. Choose a congregation and confirm its worship arrangements. James, our preacher, is the primary contact for general guidance.",
    heading:"Three simple steps to your first visit.",
    sections:[
      {
        title:"Find a congregation",
        text:"Use our directory to choose a congregation in Mumbai, Navi Mumbai or the surrounding region.",
        href:"/congregations/",
        label:"Find your congregation"
      },
      {
        title:"Confirm your arrangements",
        text:"Check the worship time and meeting venue. Contact the congregation about language, accessibility and the correct entrance."
      },
      {
        title:"Discover New Testament worship",
        text:"Expect a focus on Scripture, prayer, singing, the Lord's Supper and giving, following the New Testament pattern.",
        scripture:"Acts 2:42",
        href:"/about/what-we-believe/",
        label:"Explore our beliefs"
      }
    ],
    faq:[
      {question:"Where can I attend Sunday worship near me?",answer:"Use our congregation directory to find a local church. The Vashi Church of Christ has published Sunday worship timings; check other congregation profiles for their current arrangements."},
      {question:"How can I find church timings in Mumbai?",answer:"The worship directory on this page lists published meeting times. Confirm the day, venue and language with your chosen congregation before travelling."},
      {question:"Can I attend if I am not a Christian?",answer:"Yes. Visitors are welcome to listen, learn and ask questions."},
      {question:"Do I have to make a donation?",answer:"No payment is required to visit or learn about Scripture."},
      {question:"What language is used?",answer:"Languages vary between congregations. Please confirm directly with your chosen congregation."}
    ],
    verse:"Come and see.",
    reference:"John 1:39"
  },

  "request-a-bible-study": {
    title:"Bible Study in Mumbai & Navi Mumbai",
    eyebrow:"Discover God's Word",
    headline:"Open the Bible. Discover Christ.",
    description:"Looking for Bible study groups or personal Bible studies in Mumbai and Navi Mumbai? Connect with a local Church of Christ or explore our Scripture lessons.",
    image:"/images/home/bibleStudy.jpg",
    indexable:true,
    contacts:true,
    answer:"To arrange a Bible study, contact James, our preacher, by telephone or WhatsApp, or reach out directly to a local congregation. Ask about available times, language and personal or group study arrangements.",
    heading:"Begin wherever you are.",
    sections:[
      {
        title:"Who is Jesus Christ?",
        text:"Explore the life, identity and teaching of Jesus through the Gospel accounts.",
        scripture:"John 20:30–31",
        href:"/resources/bible-studies/who-is-jesus-christ/",
        label:"Begin this lesson"
      },
      {
        title:"Understanding salvation",
        text:"Study God's grace, faith, repentance, confession and baptism in the New Testament.",
        href:"/resources/bible-studies/what-must-i-do-to-be-saved/",
        label:"Explore salvation"
      },
      {
        title:"Learn to study Scripture",
        text:"Learn to read passages in context, examine their meaning and consider their application.",
        href:"/resources/bible-studies/how-to-study-the-bible/",
        label:"Learn how to study"
      }
    ],
    faq:[
      {question:"Where can I find a Bible study group near me?",answer:"Choose a Church of Christ in your area using the congregation directory. Contact the congregation to ask about personal or group Bible study arrangements."},
      {question:"Can beginners request a Bible study?",answer:"Yes. You can begin with basic questions about Jesus, Christianity and Scripture."},
      {question:"Do I need previous Bible knowledge?",answer:"No. You can begin with basic questions and study at your own pace."},
      {question:"Can I request a particular language?",answer:"Yes. Ask your local congregation about available languages."},
      {question:"Does this website collect my information?",answer:"There is no enquiry form on this page. Its contact links open your phone or email application so you can contact the congregation directly."}
    ],
    verse:"Search the scriptures.",
    reference:"John 5:39"
  },

  "prayer-requests": {
    title:"Prayer Requests and Spiritual Encouragement",
    eyebrow:"Bearing one another's burdens",
    headline:"Bring your concerns before God.",
    description:"Find Biblical encouragement about prayer and connect directly with a local Church of Christ to request prayer or spiritual support.",
    image:"/images/home/bible.jpg",
    indexable:true,
    contacts:true,
    answer:"If you would like someone to pray with you, contact James, our preacher, or a local congregation. Share only information you are comfortable disclosing and ask how it will be handled.",
    heading:"Finding encouragement in Scripture.",
    sections:[
      {
        title:"Pray with trust",
        text:"Bring your requests before God with thanksgiving, seeking His peace and wisdom.",
        scripture:"Philippians 4:6–7"
      },
      {
        title:"Pray for one another",
        text:"Scripture encourages Christians to pray for one another and offer spiritual encouragement.",
        scripture:"James 5:16"
      },
      {
        title:"Learn about prayer",
        text:"Explore what Scripture teaches about speaking to God.",
        href:"/resources/questions-and-answers/how-do-i-pray/",
        label:"Read about prayer"
      }
    ],
    faq:[
      {question:"How do I submit a prayer request?",answer:"Contact a congregation directly through the available telephone or email link. No prayer request is submitted through this website."},
      {question:"Are my prayer requests confidential?",answer:"Ask the congregation about its confidentiality practices before sharing sensitive information. This directory cannot promise confidentiality on behalf of independent congregations."}
    ],
    verse:"Pray one for another.",
    reference:"James 5:16"
  },

  "contact": {
    title:"Contact Churches of Christ in Mumbai and Navi Mumbai",
    eyebrow:"Connect with a local congregation",
    headline:"We welcome your questions.",
    description:"Find published contact information for Churches of Christ in Mumbai and Navi Mumbai, and enquire about worship, Bible study and visiting.",
    image:"/images/home/gateway.jpg",
    indexable:true,
    contacts:true,
    answer:"James, the preacher at Vashi Church of Christ, is the primary point of contact for general enquiries. Individual congregations remain responsible for their own local worship, teaching and arrangements.",
    heading:"How can we help?",
    sections:[
      {
        title:"Plan your visit",
        text:"Find worship timings and meeting locations.",
        href:"/plan-your-visit/",
        label:"Visitor information"
      },
      {
        title:"Explore the Bible",
        text:"Begin a personal study or contact a congregation about study arrangements.",
        href:"/request-a-bible-study/",
        label:"Request a Bible study"
      },
      {
        title:"Request prayer",
        text:"Connect with a congregation for prayer and spiritual encouragement.",
        href:"/prayer-requests/",
        label:"Prayer and encouragement"
      }
    ],
    faq:[
      {question:"Is there one central contact for all congregations?",answer:"James is our primary contact for general enquiries. Individual congregations remain responsible for their own local arrangements and can also be contacted directly."},
      {question:"What if a congregation has no contact details listed?",answer:"Each congregation has its own contact arrangements. Contact information will appear on its profile once approved for publication."}
    ],
    verse:"The churches of Christ salute you.",
    reference:"Romans 16:16"
  }
};
