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
    "title": "Christian Worship in Mumbai & Navi Mumbai",
    "eyebrow": "About Christian worship",
    "headline": "Worship rooted in Scripture.",
    "description": "Learn about Christian worship and the New Testament pattern followed by Churches of Christ.",
    "image": "/images/home/mumbai.jpg",
    "indexable": true,
    "contacts": true,
    "answer": "Churches of Christ gather for worship and fellowship. Use our contact page for general enquiries.",
    "heading": "What Christian worship involves.",
    "sections": [
      {
        "title": "Singing and prayer",
        "text": "Christians praise God and pray together."
      },
      {
        "title": "The Lord’s Supper",
        "text": "Remembering the sacrifice of Jesus Christ.",
        "href": "/resources/lords-supper/",
        "label": "Read about the Lord’s Supper"
      },
      {
        "title": "Biblical teaching",
        "text": "Explore what the Scriptures teach.",
        "href": "/about/what-we-believe/",
        "label": "Explore our beliefs"
      }
    ],
    "faq": [
      {
        "question": "How can I get in touch?",
        "answer": "Use the contact page for general enquiries about the website, worship and Biblical resources."
      }
    ],
    "verse": "Come and see.",
    "reference": "John 1:39"
  },
  "request-a-bible-study": {
    "title": "Bible Study in Mumbai & Navi Mumbai",
    "eyebrow": "Discover God’s Word",
    "headline": "Explore the Scriptures.",
    "description": "Read Biblical study resources and learn about Scripture at your own pace.",
    "image": "/images/home/bibleStudy.jpg",
    "indexable": true,
    "contacts": true,
    "answer": "Our online Bible study resources are available to anyone who chooses to read them. For general enquiries, visit our contact page.",
    "heading": "Begin with Scripture.",
    "sections": [
      {
        "title": "Who is Jesus Christ?",
        "text": "Explore the Gospel accounts.",
        "href": "/resources/bible-studies/who-is-jesus-christ/",
        "label": "Read the lesson"
      },
      {
        "title": "How to study the Bible",
        "text": "Read Scripture in context.",
        "href": "/resources/bible-studies/how-to-study-the-bible/",
        "label": "Learn more"
      },
      {
        "title": "Bible study library",
        "text": "Explore the collection of written studies.",
        "href": "/resources/bible-studies/",
        "label": "Browse resources"
      }
    ],
    "faq": [
      {
        "question": "How can I get in touch?",
        "answer": "Use the contact page for general enquiries about the website, worship and Biblical resources."
      }
    ],
    "verse": "Search the scriptures.",
    "reference": "John 5:39"
  },
  "prayer-requests": {
    "title": "Prayer and Biblical Encouragement",
    "eyebrow": "Bearing one another’s burdens",
    "headline": "Find encouragement in Scripture.",
    "description": "Explore Biblical teachings on prayer and spiritual encouragement.",
    "image": "/images/home/bible.jpg",
    "indexable": true,
    "contacts": true,
    "answer": "Explore the Biblical teachings on prayer. For general questions, visit our contact page. Please avoid sharing sensitive personal information.",
    "heading": "Finding encouragement in Scripture.",
    "sections": [
      {
        "title": "Pray with trust",
        "text": "Read Philippians 4:6–7 in context."
      },
      {
        "title": "Learn about prayer",
        "text": "Explore what Scripture teaches about speaking to God.",
        "href": "/resources/questions-and-answers/how-do-i-pray/",
        "label": "Read about prayer"
      }
    ],
    "faq": [
      {
        "question": "How can I get in touch?",
        "answer": "Use the contact page for general enquiries about the website, worship and Biblical resources."
      }
    ],
    "verse": "Pray one for another.",
    "reference": "James 5:16"
  },
  "contact": {
    "title": "Contact Mumbai Church of Christ",
    "eyebrow": "General enquiries",
    "headline": "We welcome your questions.",
    "description": "A central contact page for general questions about Biblical resources, Christian worship and this website.",
    "image": "/images/home/gateway.jpg",
    "indexable": true,
    "contacts": true,
    "answer": "We welcome general enquiries about Christian worship and Biblical resources.",
    "heading": "Explore our website.",
    "sections": [
      {
        "title": "Christian worship",
        "text": "Learn about New Testament worship.",
        "href": "/plan-your-visit/",
        "label": "Read more"
      },
      {
        "title": "Biblical resources",
        "text": "Explore Scripture-based articles and lessons.",
        "href": "/resources/",
        "label": "Browse resources"
      }
    ],
    "faq": [
      {
        "question": "How can I get in touch?",
        "answer": "Use the contact page for general enquiries about the website, worship and Biblical resources."
      }
    ],
    "verse": "The churches of Christ salute you.",
    "reference": "Romans 16:16"
  }
};
