export interface AboutCard {
  title: string;
  description: string;
  scripture: string;
  detail: string;
  link: string;
}

export interface AboutPage {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  verse: string;
  reference: string;
  heading: string;
  intro: string[];
  cardsHeading: string;
  cards: AboutCard[];
  faq: { question: string; answer: string }[];
}

export const aboutPages: AboutPage[] = [
  {
    "slug": "",
    "title": "Who We Are",
    "eyebrow": "One Lord · One faith",
    "headline": "Rooted in Scripture. United in Christ.",
    "description": "Discover the Churches of Christ across Mumbai and our shared commitment to Jesus Christ, Scripture and New Testament Christianity.",
    "image": "/images/home/bible.jpg",
    "imageAlt": "An open Bible",
    "verse": "One Lord, one faith, one baptism.",
    "reference": "Ephesians 4:5",
    "heading": "Christ is the centre of our faith.",
    "intro": [
      "We seek to follow Jesus Christ and the teaching of the New Testament. Our purpose is to glorify God, share the Gospel and encourage people to grow as faithful disciples.",
      "The Mumbai Church of Christ website connects readers with local Churches of Christ throughout Mumbai, Navi Mumbai and the surrounding region.",
      "Each local congregation is responsible for its own worship, teaching and arrangements. This website serves as a shared directory and Biblical resource, rather than a governing authority over the congregations."
    ],
    "cardsHeading": "Our purpose",
    "cards": [
      {
        "title": "Know Christ",
        "description": "Discover the Son of God and the hope found in Him.",
        "scripture": "John 20:30–31",
        "detail": "John explains that his Gospel was written so that readers might believe Jesus is the Christ, the Son of God.",
        "link": "/resources/bible-studies/who-is-jesus-christ/"
      },
      {
        "title": "Follow Scripture",
        "description": "Seek God's will through the teaching of His Word.",
        "scripture": "2 Timothy 3:16–17",
        "detail": "Scripture is given by inspiration of God and equips believers for faithful living.",
        "link": "/about/what-we-believe/"
      },
      {
        "title": "Grow Together",
        "description": "Encourage one another through worship and fellowship.",
        "scripture": "Hebrews 10:24–25",
        "detail": "Christians are encouraged to assemble together and stir one another towards love and good works.",
        "link": "/congregations/"
      }
    ],
    "faq": [
      {
        "question": "Is this a single church building?",
        "answer": "No. This website helps visitors discover individual Churches of Christ in the Mumbai region."
      },
      {
        "question": "Can I visit if I am new to Christianity?",
        "answer": "Yes. You are welcome to explore Scripture, ask questions and enquire about visiting a local congregation."
      },
      {
        "question": "How can I learn more?",
        "answer": "Begin with our Bible study library or contact a local congregation to enquire about personal Bible study."
      }
    ]
  },
  {
    "slug": "what-we-believe",
    "title": "What We Believe",
    "eyebrow": "Our Biblical foundation",
    "headline": "One faith. Guided by God's Word.",
    "description": "Explore foundational Christian beliefs concerning God, Jesus Christ, Scripture, salvation, worship and faithful discipleship.",
    "image": "/images/home/scriptures.jpg",
    "imageAlt": "Biblical Scripture illustration",
    "verse": "Sanctify them through thy truth: thy word is truth.",
    "reference": "John 17:17",
    "heading": "Let Scripture guide our understanding.",
    "intro": [
      "Our aim is to understand and follow God's revelation rather than make human preferences the foundation of Christian faith.",
      "The following statements summarize foundational beliefs held within Churches of Christ. We encourage readers to examine the referenced passages in their full Biblical context."
    ],
    "cardsHeading": "Foundations of our faith",
    "cards": [
      {
        "title": "God",
        "description": "We believe in the one true God, Creator of heaven and earth.",
        "scripture": "Genesis 1:1 · Ephesians 4:6",
        "detail": "Scripture reveals God as Creator, holy, righteous, loving and worthy of worship.",
        "link": ""
      },
      {
        "title": "Jesus Christ",
        "description": "Jesus is the Son of God, our Saviour and Lord.",
        "scripture": "John 1:1–14 · John 20:31",
        "detail": "Jesus became flesh, died for our sins, rose from the dead and is central to our salvation.",
        "link": "/resources/bible-studies/who-is-jesus-christ/"
      },
      {
        "title": "The Holy Spirit",
        "description": "The Holy Spirit is revealed in Scripture and is active in God's work.",
        "scripture": "John 14:26 · Acts 2:38",
        "detail": "The New Testament describes the Holy Spirit's work in revelation, the life of believers and God's plan of redemption.",
        "link": ""
      },
      {
        "title": "The Scriptures",
        "description": "The Bible is the inspired Word of God.",
        "scripture": "2 Timothy 3:16–17",
        "detail": "Scripture guides our understanding of God, Christian doctrine, worship and conduct.",
        "link": "/resources/bible-studies/how-to-study-the-bible/"
      },
      {
        "title": "Grace and Salvation",
        "description": "Salvation is God's gift through Jesus Christ.",
        "scripture": "Ephesians 2:8–10",
        "detail": "God's grace is the foundation of salvation. Good works do not purchase forgiveness; faithful obedience responds to God's grace.",
        "link": "/resources/bible-studies/why-do-we-need-a-saviour/"
      },
      {
        "title": "Faith and Baptism",
        "description": "We seek to respond to the Gospel as taught in the New Testament.",
        "scripture": "Acts 2:38 · Romans 6:3–4",
        "detail": "Churches of Christ understand faith, repentance, confession and baptism as integral to the Biblical response to the Gospel.",
        "link": "/resources/bible-studies/what-must-i-do-to-be-saved/"
      },
      {
        "title": "The Church",
        "description": "Christ is the head of His church.",
        "scripture": "Colossians 1:18",
        "detail": "Our shared identity is grounded in Christ. Local congregations seek to follow the pattern of the New Testament.",
        "link": "/resources/bible-studies/what-is-the-church/"
      },
      {
        "title": "Christian Worship",
        "description": "We seek to worship God in spirit and in truth.",
        "scripture": "John 4:23–24 · Acts 2:42",
        "detail": "Christian gatherings include prayer, spiritual singing, Biblical teaching, the Lord's Supper and giving.",
        "link": "/about/new-testament-christianity/"
      },
      {
        "title": "Faithful Discipleship",
        "description": "Following Christ is a lifelong commitment.",
        "scripture": "Luke 9:23 · Revelation 2:10",
        "detail": "Disciples seek to grow in love, obedience, holiness, service and perseverance throughout their lives.",
        "link": ""
      }
    ],
    "faq": [
      {
        "question": "What is the foundation of your teaching?",
        "answer": "We seek to ground our beliefs and practices in Scripture, with Jesus Christ at the centre."
      },
      {
        "question": "Do good works earn salvation?",
        "answer": "No. Ephesians 2:8–10 teaches that salvation is God's gift through faith and that Christians are created in Christ for good works."
      },
      {
        "question": "Can I ask questions about these beliefs?",
        "answer": "Yes. We encourage careful examination of Scripture and respectful discussion through personal or group Bible study."
      }
    ]
  },
  {
    "slug": "our-history",
    "title": "Our History",
    "eyebrow": "Returning to the Scriptures",
    "headline": "Looking back to the New Testament church.",
    "description": "Explore the Biblical beginnings of Christianity, the early church and the desire to restore New Testament faith and practice.",
    "image": "/images/home/scriptures.jpg",
    "imageAlt": "Historical Scripture illustration",
    "verse": "And they continued stedfastly in the apostles' doctrine and fellowship.",
    "reference": "Acts 2:42",
    "heading": "Our starting point is Jesus Christ.",
    "intro": [
      "The history of Christianity begins with Jesus Christ, His ministry, His death and resurrection, and the proclamation of the Gospel.",
      "Churches of Christ seek to understand Christian faith and practice by returning to the teaching of the New Testament.",
      "We are gathering the documented history of individual Mumbai congregations. Local founding dates, historical photographs and congregation histories will be added when reliable information becomes available."
    ],
    "cardsHeading": "Explore the Biblical foundations",
    "cards": [
      {
        "title": "The Promise of Christ",
        "description": "Jesus speaks of building His church.",
        "scripture": "Matthew 16:18",
        "detail": "Jesus identifies the church as belonging to Him. The foundation of Christian identity is Christ.",
        "link": ""
      },
      {
        "title": "The Gospel Proclaimed",
        "description": "The message of Jesus' death and resurrection.",
        "scripture": "Acts 2:22–41",
        "detail": "Peter proclaims the risen Christ, calls his hearers to respond and records the baptism of those who received the message.",
        "link": ""
      },
      {
        "title": "The First Christians",
        "description": "Teaching, fellowship, worship and prayer.",
        "scripture": "Acts 2:42–47",
        "detail": "The earliest Christian community continued in the apostles' teaching, fellowship, breaking of bread and prayers.",
        "link": ""
      },
      {
        "title": "The Gospel Spreads",
        "description": "The good news reaches people beyond Jerusalem.",
        "scripture": "Acts 8:4 · Acts 13:47",
        "detail": "The book of Acts records the spread of the Gospel to new communities and peoples.",
        "link": ""
      },
      {
        "title": "Holding to the Faith",
        "description": "Preserving the teaching entrusted to Christians.",
        "scripture": "Jude 3",
        "detail": "Jude encourages believers to contend for the faith once delivered unto the saints.",
        "link": ""
      },
      {
        "title": "Returning to Scripture",
        "description": "Examining Christian faith and practice through the New Testament.",
        "scripture": "Acts 17:11",
        "detail": "We encourage readers to examine the Scriptures carefully and consider the relationship between Biblical teaching and Christian traditions.",
        "link": "/resources/church-history/"
      }
    ],
    "faq": [
      {
        "question": "When were the Mumbai congregations established?",
        "answer": "Documented local histories are being collected. We will publish dates and historical details when they can be confirmed."
      },
      {
        "question": "Where can I learn more about church history?",
        "answer": "Explore our Church History and Restoration resource, including the book Who Changed the Church?"
      }
    ]
  },
  {
    "slug": "new-testament-christianity",
    "title": "New Testament Christianity",
    "eyebrow": "Following Jesus",
    "headline": "Christianity as taught in Scripture.",
    "description": "Explore the New Testament pattern of Christian worship, salvation, fellowship, church organization and discipleship.",
    "image": "/images/home/bibleStudy.jpg",
    "imageAlt": "An open Bible and study materials",
    "verse": "And whatsoever ye do in word or deed, do all in the name of the Lord Jesus.",
    "reference": "Colossians 3:17",
    "heading": "Following Christ in faith and practice.",
    "intro": [
      "New Testament Christianity places Jesus Christ at the centre of faith, worship and daily life.",
      "We seek to examine the teachings and practices of the earliest Christians and apply Biblical principles faithfully in our own circumstances.",
      "The following areas introduce important aspects of Christian life. Each should be studied alongside the wider teaching of Scripture."
    ],
    "cardsHeading": "The life of a disciple",
    "cards": [
      {
        "title": "The Gospel",
        "description": "The death, burial and resurrection of Jesus Christ.",
        "scripture": "1 Corinthians 15:1–4",
        "detail": "The Gospel announces God's saving work through Jesus Christ.",
        "link": "/resources/bible-studies/what-must-i-do-to-be-saved/"
      },
      {
        "title": "Singing",
        "description": "Praising God through spiritual songs.",
        "scripture": "Ephesians 5:19",
        "detail": "Churches of Christ traditionally practise congregational a cappella singing as part of worship.",
        "link": ""
      },
      {
        "title": "Prayer",
        "description": "Approaching God with reverence and thanksgiving.",
        "scripture": "Acts 2:42 · Philippians 4:6",
        "detail": "Prayer expresses dependence upon God and is central to individual and congregational life.",
        "link": "/resources/questions-and-answers/how-do-i-pray/"
      },
      {
        "title": "The Lord's Supper",
        "description": "Remembering the sacrifice of Christ.",
        "scripture": "Acts 20:7 · 1 Corinthians 11:26",
        "detail": "Churches of Christ traditionally observe the Lord's Supper each first day of the week in remembrance of Jesus.",
        "link": "/resources/lords-supper/"
      },
      {
        "title": "Biblical Teaching",
        "description": "Learning and applying God's Word.",
        "scripture": "Acts 2:42 · 2 Timothy 4:2",
        "detail": "Christians seek to grow in knowledge of Scripture through preaching, teaching and personal study.",
        "link": "/resources/bible-studies/"
      },
      {
        "title": "Giving",
        "description": "Serving God through willing generosity.",
        "scripture": "1 Corinthians 16:2 · 2 Corinthians 9:7",
        "detail": "Giving should be voluntary, purposeful and cheerful rather than compelled.",
        "link": ""
      },
      {
        "title": "Local Congregations",
        "description": "Serving under the authority of Christ.",
        "scripture": "Colossians 1:18 · Acts 14:23",
        "detail": "Churches of Christ understand local congregations as autonomous, with elders and deacons serving where qualified members have been appointed.",
        "link": ""
      },
      {
        "title": "Fellowship",
        "description": "Encouraging and serving one another.",
        "scripture": "Acts 2:42 · Hebrews 10:24–25",
        "detail": "Christian fellowship involves shared faith, worship, mutual encouragement and practical care.",
        "link": ""
      },
      {
        "title": "Making Disciples",
        "description": "Sharing Christ and helping others grow in faith.",
        "scripture": "Matthew 28:19–20",
        "detail": "Jesus commissions His followers to make disciples, baptize and teach obedience to His commandments.",
        "link": ""
      }
    ],
    "faq": [
      {
        "question": "What happens during worship?",
        "answer": "Churches of Christ typically gather for singing, prayer, Biblical teaching, the Lord's Supper and giving. Confirm arrangements with the local congregation."
      },
      {
        "question": "Are all congregations governed centrally?",
        "answer": "Churches of Christ generally understand congregations as autonomous, with Christ as the head of the church."
      },
      {
        "question": "How can I begin following Jesus?",
        "answer": "Begin by learning about Jesus and the Gospel through Scripture. A local congregation can help you explore faith, repentance, baptism and discipleship."
      }
    ]
  }
];

export const aboutHref = (page: AboutPage) =>
  page.slug ? `/about/${page.slug}/` : "/about/";
