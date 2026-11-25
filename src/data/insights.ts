export interface InsightCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
  theme: string;
}

export interface InsightArticle {
  category: string;
  slug: string;
  image: string;
  title: string;
  summary: string;
  scriptures: string[];
  sections: { heading: string; paragraphs: string[] }[];
  takeaway: string;
  resource: string;
  resourceLabel: string;
}

export const insightCategories: InsightCategory[] = [
  {
    "slug": "biblical-studies",
    "title": "Biblical Studies",
    "description": "Explore Scripture, its context and the unfolding message of God's Word.",
    "image": "/images/home/scriptures.jpg",
    "theme": "navy"
  },
  {
    "slug": "christian-living",
    "title": "Christian Living",
    "description": "Apply Biblical principles to everyday relationships, responsibilities and decisions.",
    "image": "/images/home/christianLiving.jpg",
    "theme": "gold"
  },
  {
    "slug": "christian-apologetics",
    "title": "Christian Apologetics",
    "description": "Examine thoughtful questions about Christianity, faith and the Gospel.",
    "image": "/images/home/apologetics.jpg",
    "theme": "blue"
  },
  {
    "slug": "new-testament-christianity",
    "title": "New Testament Christianity",
    "description": "Explore the faith, worship and practices of the early Christians.",
    "image": "/images/home/bibleStudy.jpg",
    "theme": "burgundy"
  },
  {
    "slug": "spiritual-growth",
    "title": "Spiritual Growth",
    "description": "Develop a deeper understanding of Scripture and grow as a faithful disciple of Christ.",
    "image": "/images/home/bible.jpg",
    "theme": "purple"
  }
];

export const insightArticles: InsightArticle[] = [
  {
    "category": "biblical-studies",
    "slug": "understanding-the-old-and-new-covenants",
    "title": "Understanding the Old and New Covenants",
    "summary": "Explore the relationship between the Law of Moses, the promises of God and the new covenant established through Jesus Christ.",
    "scriptures": [
      "Jeremiah 31:31–34",
      "Hebrews 8:6–13",
      "Galatians 3:23–29",
      "Luke 22:20"
    ],
    "sections": [
      {
        "heading": "Understanding the covenant at Sinai",
        "paragraphs": [
          "The Old Testament records God's covenant relationship with Israel, including the Law given through Moses. Exodus 19–24 describes the establishment of that covenant and the responsibilities entrusted to Israel.",
          "The Law provided instruction concerning worship, holiness and the life of the nation. Understanding its purpose and original audience helps us read its commandments in their proper context."
        ]
      },
      {
        "heading": "The promise of a new covenant",
        "paragraphs": [
          "Jeremiah 31 speaks of a coming covenant in which God's law would be written upon the hearts of His people. The passage connects this promise with forgiveness and a renewed relationship with God.",
          "Hebrews 8 applies Jeremiah's prophecy to the new covenant mediated by Jesus Christ. Jesus' words concerning the cup in Luke 22:20 also connect the new covenant with His sacrificial death."
        ]
      },
      {
        "heading": "How Christians should read the Old Testament",
        "paragraphs": [
          "The distinction between the covenants does not make the Old Testament irrelevant. Romans 15:4 explains that earlier Scriptures were written for our learning and encouragement.",
          "Christians should examine how Old Testament teachings relate to Christ and the instruction given in the New Testament, rather than automatically transferring every command addressed to ancient Israel into Christian worship."
        ]
      },
      {
        "heading": "Christ is central to the Biblical story",
        "paragraphs": [
          "The promises, prophecies and patterns of the Old Testament help readers appreciate the significance of Jesus Christ.",
          "Reading both Testaments together reveals the importance of God's faithfulness, humanity's need for redemption and the hope offered through Christ."
        ]
      }
    ],
    "takeaway": "Read Jeremiah 31 alongside Hebrews 8. Notice how the New Testament explains the promise of a new covenant.",
    "resource": "/resources/bible-studies/what-must-i-do-to-be-saved/",
    "resourceLabel": "Explore the Gospel and salvation",
    "image": "/images/home/apologetics.jpg"
  },
  {
    "category": "biblical-studies",
    "slug": "why-biblical-context-matters",
    "title": "Why Biblical Context Matters",
    "summary": "Discover why understanding the audience, circumstances and surrounding passages is essential when interpreting Scripture.",
    "scriptures": [
      "Nehemiah 8:8",
      "Acts 17:11",
      "2 Timothy 2:15",
      "2 Timothy 3:16–17"
    ],
    "sections": [
      {
        "heading": "A verse belongs to a larger message",
        "paragraphs": [
          "Bible verses are often quoted individually because they are memorable and meaningful. However, each verse belongs to a passage, and each passage belongs to a larger book.",
          "Reading the surrounding verses can reveal whether a statement is a command, a promise, a historical description, a warning or part of a larger argument."
        ]
      },
      {
        "heading": "Consider the original audience",
        "paragraphs": [
          "The letters of the New Testament frequently address particular congregations, individuals and circumstances. Recognizing those circumstances helps readers understand the purpose behind the teaching.",
          "This does not mean that Scripture has no application today. It means that responsible application begins with understanding what the passage communicates."
        ]
      },
      {
        "heading": "Compare Scripture with Scripture",
        "paragraphs": [
          "A Biblical subject may be discussed in several books. Reading related passages helps us avoid developing an interpretation from one isolated statement.",
          "The Bereans in Acts 17 examined the Scriptures to evaluate what they were taught. Their example encourages careful investigation rather than uncritical acceptance."
        ]
      },
      {
        "heading": "Move from interpretation to application",
        "paragraphs": [
          "Once we understand the message of a passage, we can consider how its teaching applies to our lives.",
          "A useful approach is to ask what the text says, what it means in context and how we should respond faithfully."
        ]
      }
    ],
    "takeaway": "Before applying a favourite verse, read the entire chapter and identify its main message.",
    "resource": "/resources/bible-studies/how-to-study-the-bible/",
    "resourceLabel": "Begin a guided Bible study",
    "image": "/images/home/bibleStudy.jpg"
  },
  {
    "category": "christian-living",
    "slug": "living-as-a-christian-in-a-busy-city",
    "title": "Living as a Christian in a Busy City",
    "summary": "Explore how faith can shape daily life amid work, commuting, family responsibilities and the demands of living in Mumbai.",
    "scriptures": [
      "Matthew 6:33",
      "Colossians 3:17",
      "Ephesians 5:15–16",
      "Mark 1:35"
    ],
    "sections": [
      {
        "heading": "Faith beyond the Sunday assembly",
        "paragraphs": [
          "Life in a busy city can involve long commutes, demanding work schedules and numerous family responsibilities. Spiritual growth can easily become something we intend to pursue when life becomes less complicated.",
          "The New Testament presents discipleship as a way of life rather than an activity restricted to a weekly gathering."
        ]
      },
      {
        "heading": "Making time for what matters",
        "paragraphs": [
          "Matthew 6:33 directs our attention towards God's kingdom and righteousness. This principle encourages us to examine the priorities that govern our decisions.",
          "Regular time for Scripture and prayer need not begin with an elaborate schedule. A manageable routine can help establish habits of spiritual reflection."
        ]
      },
      {
        "heading": "Reflecting Christ at work",
        "paragraphs": [
          "Christian character should be visible in honesty, patience, diligence and the way we treat colleagues.",
          "Colossians 3:17 encourages believers to act in the name of the Lord Jesus. Our everyday responsibilities therefore provide opportunities to practise what we believe."
        ]
      },
      {
        "heading": "Remaining connected",
        "paragraphs": [
          "Christian fellowship provides opportunities to encourage others and receive encouragement ourselves.",
          "Finding a congregation within reasonable travelling distance can help believers maintain regular worship and Bible study alongside the responsibilities of city life."
        ]
      }
    ],
    "takeaway": "Set aside a realistic period for Scripture and prayer, and explore a local congregation whose meeting arrangements suit your circumstances.",
    "resource": "/congregations/",
    "resourceLabel": "Find a congregation near you",
    "image": "/images/home/mumbai.jpg"
  },
  {
    "category": "christian-living",
    "slug": "forgiving-others-when-it-is-difficult",
    "title": "Forgiving Others When It Is Difficult",
    "summary": "Consider how the grace of God shapes Christian forgiveness, compassion and responses to wrongdoing.",
    "scriptures": [
      "Matthew 18:21–35",
      "Ephesians 4:31–32",
      "Romans 12:17–21",
      "Luke 17:3–4"
    ],
    "sections": [
      {
        "heading": "Remembering the mercy we receive",
        "paragraphs": [
          "In Matthew 18, Jesus tells a parable about a servant who receives mercy but refuses to show mercy to another person.",
          "The parable challenges disciples to consider their treatment of others in light of the forgiveness they themselves need from God."
        ]
      },
      {
        "heading": "Forgiveness does not deny wrongdoing",
        "paragraphs": [
          "Christian forgiveness does not require pretending that harmful behaviour was acceptable. Scripture recognizes wrongdoing and calls people to repentance.",
          "Forgiveness should not be confused with removing necessary boundaries, immediately restoring trust or remaining in an unsafe situation."
        ]
      },
      {
        "heading": "Responding without revenge",
        "paragraphs": [
          "Romans 12 encourages believers not to repay evil for evil. This teaching challenges our natural desire to retaliate when we have been hurt.",
          "Choosing not to seek personal revenge can coexist with pursuing justice, seeking appropriate help and protecting those who are vulnerable."
        ]
      },
      {
        "heading": "Growing in compassion",
        "paragraphs": [
          "Ephesians 4 connects kindness, compassion and forgiveness with God's forgiveness through Christ.",
          "Learning to forgive may involve difficult decisions, honest conversations and repeated reflection on God's grace."
        ]
      }
    ],
    "takeaway": "Consider whether resentment is shaping your conduct. Seek wisdom through Scripture, prayer and appropriate support.",
    "resource": "/resources/devotionals/love-one-another/",
    "resourceLabel": "Read Love One Another",
    "image": "/images/home/christianLiving.jpg"
  },
  {
    "category": "christian-apologetics",
    "slug": "why-the-resurrection-of-jesus-matters",
    "title": "Why the Resurrection of Jesus Matters",
    "summary": "Examine why the resurrection stands at the centre of the Christian Gospel, its proclamation and its message of hope.",
    "scriptures": [
      "1 Corinthians 15:1–20",
      "Luke 24:36–49",
      "Acts 2:22–36",
      "Romans 6:4"
    ],
    "sections": [
      {
        "heading": "The central claim of the Gospel",
        "paragraphs": [
          "Christianity is not presented in the New Testament merely as a collection of moral principles. Its central proclamation concerns Jesus Christ, His death for sins and His resurrection.",
          "Paul explains in 1 Corinthians 15 that the resurrection is essential to the Christian message. Without it, he says, Christian preaching and faith would be empty."
        ]
      },
      {
        "heading": "The New Testament testimony",
        "paragraphs": [
          "The Gospels present accounts of Jesus' resurrection and appearances. First Corinthians 15 records a summary of resurrection testimony that Paul says he received and passed on.",
          "These passages are important primary texts for understanding what the earliest Christian proclamation claimed. Readers investigating Christianity should examine their content, context and historical questions carefully."
        ]
      },
      {
        "heading": "Faith and historical questions",
        "paragraphs": [
          "The resurrection is a claim about an event, not merely a metaphor for personal optimism.",
          "Historical investigation can examine testimony, texts and their contexts. Questions about divine action also involve philosophical and theological considerations that should not be concealed or oversimplified."
        ]
      },
      {
        "heading": "The Christian hope",
        "paragraphs": [
          "Paul connects Christ's resurrection with the future resurrection of believers. The hope of Christianity extends beyond present circumstances and earthly life.",
          "Romans 6 also connects Christ's resurrection with the believer's calling to walk in newness of life."
        ]
      }
    ],
    "takeaway": "Read 1 Corinthians 15 in full, noting what Paul says would follow if Christ had not been raised.",
    "resource": "/resources/bible-studies/who-is-jesus-christ/",
    "resourceLabel": "Discover who Jesus Christ is",
    "image": "/images/home/scriptures.jpg"
  },
  {
    "category": "christian-apologetics",
    "slug": "is-christian-faith-blind",
    "title": "Is Christian Faith Blind?",
    "summary": "Explore the Biblical relationship between faith, testimony, reason, trust and obedience.",
    "scriptures": [
      "Hebrews 11:1–6",
      "John 20:24–31",
      "Acts 17:11",
      "1 Peter 3:15"
    ],
    "sections": [
      {
        "heading": "What does Scripture mean by faith?",
        "paragraphs": [
          "Hebrews 11 describes faith in terms of confidence concerning what is hoped for and conviction concerning what is not seen.",
          "Biblical faith involves trusting God and responding to His promises. It is not simply believing every claim without examination."
        ]
      },
      {
        "heading": "The place of testimony",
        "paragraphs": [
          "John 20 records Thomas' encounter with the risen Jesus and explains the purpose of the Gospel's written testimony.",
          "The passage invites readers to consider the significance of the testimony concerning Jesus and its relationship to belief."
        ]
      },
      {
        "heading": "Questions and examination",
        "paragraphs": [
          "Acts 17 describes the Bereans examining Scripture to consider the message they received.",
          "First Peter 3:15 encourages Christians to give an answer concerning their hope with meekness and reverence. Respectful discussion is consistent with Christian discipleship."
        ]
      },
      {
        "heading": "From understanding to trust",
        "paragraphs": [
          "Understanding Christian claims is an important part of exploring faith. Trust, however, also concerns how we respond to what we believe.",
          "The New Testament connects faith with obedience, perseverance and a willingness to follow Christ."
        ]
      }
    ],
    "takeaway": "Write down your most important questions about Christianity. Examine the relevant Scriptures rather than dismissing or suppressing those questions.",
    "resource": "/resources/questions-and-answers/",
    "resourceLabel": "Explore Biblical questions and answers",
    "image": "/images/home/bible.jpg"
  },
  {
    "category": "new-testament-christianity",
    "slug": "why-the-early-church-gathered",
    "title": "Why the Early Church Gathered",
    "summary": "Discover the purpose of Christian assembly through the examples and instructions found in the New Testament.",
    "scriptures": [
      "Acts 2:42–47",
      "Acts 20:7",
      "1 Corinthians 14:26",
      "Hebrews 10:24–25"
    ],
    "sections": [
      {
        "heading": "A community centred on Christ",
        "paragraphs": [
          "Acts 2 describes the early Christians continuing in the apostles' teaching, fellowship, breaking of bread and prayers.",
          "Their gatherings expressed a shared commitment to Jesus Christ and a desire to grow together in the faith."
        ]
      },
      {
        "heading": "Worship and remembrance",
        "paragraphs": [
          "Acts 20:7 records disciples gathering on the first day of the week to break bread. Paul's instructions in First Corinthians emphasize the significance of remembering Christ through the Lord's Supper.",
          "Churches of Christ traditionally follow this pattern through weekly communion, congregational singing, prayer, teaching and giving."
        ]
      },
      {
        "heading": "Building one another up",
        "paragraphs": [
          "First Corinthians 14 discusses the importance of conduct that contributes to the spiritual strengthening of the assembly.",
          "The Christian gathering is not intended merely for individual spiritual benefit. Believers also have responsibilities towards one another."
        ]
      },
      {
        "heading": "Encouraging faithful discipleship",
        "paragraphs": [
          "Hebrews 10 connects assembling together with encouraging love and good works.",
          "The purpose of gathering should therefore influence the way Christians welcome visitors, teach Scripture and care for fellow believers."
        ]
      }
    ],
    "takeaway": "Read Acts 2:42–47 and consider how its description of Christian community can guide your own participation in a congregation.",
    "resource": "/about/new-testament-christianity/",
    "resourceLabel": "Explore New Testament Christianity",
    "image": "/images/home/communion.jpg"
  },
  {
    "category": "new-testament-christianity",
    "slug": "what-does-christian-unity-mean",
    "title": "What Does Christian Unity Mean?",
    "summary": "Explore Jesus' prayer for unity and the New Testament relationship between truth, love and shared faith.",
    "scriptures": [
      "John 17:20–23",
      "Ephesians 4:1–6",
      "1 Corinthians 1:10–13",
      "Colossians 3:14"
    ],
    "sections": [
      {
        "heading": "The prayer of Jesus",
        "paragraphs": [
          "In John 17, Jesus prays not only for His immediate disciples but also for those who would believe through their message.",
          "His prayer connects the unity of believers with their witness to the world."
        ]
      },
      {
        "heading": "Unity grounded in Christ",
        "paragraphs": [
          "Ephesians 4 describes one body, one Spirit, one hope, one Lord, one faith, one baptism and one God and Father.",
          "The passage also calls Christians to humility, gentleness, patience and love. Unity therefore concerns both shared faith and the character of believers."
        ]
      },
      {
        "heading": "Beyond human personalities",
        "paragraphs": [
          "Paul challenges the divisions in Corinth by directing believers away from competing loyalties to human teachers.",
          "Churches of Christ emphasize Christ as the head of the church and Scripture as the foundation for examining faith and practice."
        ]
      },
      {
        "heading": "Pursuing truth with love",
        "paragraphs": [
          "Christians do not resolve every disagreement simply by ignoring differences. Neither should doctrinal conviction become an excuse for hostility.",
          "Careful study, humility and respectful discussion are important when seeking understanding and unity."
        ]
      }
    ],
    "takeaway": "Read Ephesians 4:1–6 and consider how its teaching about shared faith and humility applies to Christian relationships.",
    "resource": "/about/what-we-believe/",
    "resourceLabel": "Explore our Biblical beliefs",
    "image": "/images/home/bridge.jpg"
  },
  {
    "category": "spiritual-growth",
    "slug": "growing-when-god-seems-silent",
    "title": "Growing Spiritually When God Seems Silent",
    "summary": "Consider Biblical examples of waiting, prayer and faithfulness during seasons of uncertainty.",
    "scriptures": [
      "Psalm 13",
      "Habakkuk 3:17–19",
      "2 Corinthians 12:7–10",
      "Romans 8:26–28"
    ],
    "sections": [
      {
        "heading": "Honest questions before God",
        "paragraphs": [
          "Psalm 13 begins with questions that express the distress of someone who feels forgotten. The Psalms give voice to sorrow, uncertainty and longing as well as praise.",
          "Christian faith does not require denying painful emotions or pretending to understand every circumstance."
        ]
      },
      {
        "heading": "When the answer is different",
        "paragraphs": [
          "Paul describes praying for the removal of a thorn in the flesh. The answer recorded in 2 Corinthians 12 directs him towards the sufficiency of God's grace.",
          "This passage does not promise that every difficulty will be removed. It illustrates faithfulness and dependence upon Christ amid weakness."
        ]
      },
      {
        "heading": "Trust beyond circumstances",
        "paragraphs": [
          "Habakkuk 3 describes rejoicing in God even when agricultural prosperity and material security are absent.",
          "Faith can continue during uncertainty without claiming that we know precisely why every hardship has occurred."
        ]
      },
      {
        "heading": "Continue with prayer and fellowship",
        "paragraphs": [
          "Regular Scripture reading, prayer and the encouragement of fellow Christians can help sustain spiritual growth during difficult seasons.",
          "Seeking appropriate practical or professional support is also consistent with caring responsibly for ourselves and others."
        ]
      }
    ],
    "takeaway": "Read Psalm 13 and notice its movement from distress to trust. Bring your questions honestly before God in prayer.",
    "resource": "/resources/devotionals/strength-in-weakness/",
    "resourceLabel": "Read Strength in Weakness",
    "image": "/images/home/study.jpg"
  },
  {
    "category": "spiritual-growth",
    "slug": "becoming-a-disciple-not-just-a-believer",
    "title": "Becoming a Disciple, Not Just a Believer",
    "summary": "Explore the difference between merely acknowledging Christian teaching and actively following Jesus Christ.",
    "scriptures": [
      "Luke 9:23–26",
      "John 8:31–32",
      "Matthew 28:18–20",
      "James 2:14–26"
    ],
    "sections": [
      {
        "heading": "The invitation to follow Jesus",
        "paragraphs": [
          "Jesus calls His followers to deny themselves, take up their cross daily and follow Him.",
          "Discipleship involves allowing Christ's teaching to shape our priorities rather than treating Christianity as an occasional interest."
        ]
      },
      {
        "heading": "Continuing in His Word",
        "paragraphs": [
          "John 8 connects discipleship with continuing in the teaching of Jesus.",
          "Regular Bible study helps us understand what Christ teaches and recognize areas where our decisions and attitudes need to change."
        ]
      },
      {
        "heading": "Faith expressed through action",
        "paragraphs": [
          "James challenges the idea of a faith that produces no corresponding action. His teaching should be read alongside the New Testament emphasis on God's grace.",
          "Faithful obedience does not purchase salvation. It expresses a living response to the God in whom Christians place their trust."
        ]
      },
      {
        "heading": "A lifelong journey",
        "paragraphs": [
          "Matthew 28 connects making disciples with baptism and teaching obedience to Christ's commandments.",
          "Christian growth continues through worship, study, service, repentance and perseverance. It is a commitment that extends throughout life."
        ]
      }
    ],
    "takeaway": "Examine one area of your daily life where the teaching of Jesus could shape your decisions more fully.",
    "resource": "/resources/bible-studies/what-must-i-do-to-be-saved/",
    "resourceLabel": "Explore the response to the Gospel",
    "image": "/images/home/sermons.jpg"
  }
];

export const insightHref = (article: InsightArticle) =>
  `/insights/${article.category}/${article.slug}/`;

export const insightCategory = (slug: string) =>
  insightCategories.find(category => category.slug === slug)!;

export const getInsights = (category?: string) =>
  insightArticles.filter(article =>
    !category || article.category === category
  );

export const relatedInsights = (article: InsightArticle) =>
  insightArticles
    .filter(item => item.slug !== article.slug)
    .sort((a, b) =>
      Number(b.category === article.category) -
      Number(a.category === article.category)
    )
    .slice(0, 3);

export function readingMinutes(article: InsightArticle) {
  const words = article.sections
    .flatMap(section => section.paragraphs)
    .join(" ")
    .split(/\s+/).length;

  return Math.max(2, Math.ceil(words / 180));
}
