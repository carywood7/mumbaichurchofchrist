export type ResourceCategory =
  | "bible-studies"
  | "sermons"
  | "lords-supper"
  | "questions-and-answers"
  | "devotionals";

export interface BiblicalResource {
  slug: string;
  category: ResourceCategory;
  title: string;
  topic: string;
  summary: string;
  scriptures: string[];
  sections: { heading: string; paragraphs: string[] }[];
  questions: string[];
  application: string;
  answer?: string;
  teacher?: string;
  congregation?: string;
  publishedAt?: string;
  audioUrl?: string;
  videoUrl?: string;
}

export const biblicalResources: BiblicalResource[] = [
  {
    "slug": "who-is-jesus-christ",
    "category": "bible-studies",
    "title": "Who Is Jesus Christ?",
    "topic": "Knowing Jesus",
    "summary": "Discover the identity, mission and teachings of Jesus Christ through the Scriptures.",
    "scriptures": [
      "John 1:1–14",
      "John 20:30–31",
      "Colossians 1:15–20"
    ],
    "sections": [
      {
        "heading": "The Word became flesh",
        "paragraphs": [
          "John begins his Gospel by describing the Word who was with God and was God. John 1:14 reveals that the Word became flesh and dwelt among us.",
          "Jesus is not introduced merely as a moral teacher. Scripture presents Him as the Son of God, revealing the Father to humanity."
        ]
      },
      {
        "heading": "Why Jesus came",
        "paragraphs": [
          "Jesus came to seek and save the lost (Luke 19:10). His ministry revealed God's character through truth, compassion and obedience.",
          "His death and resurrection stand at the centre of the Gospel. Through Him, God offers forgiveness and reconciliation."
        ]
      },
      {
        "heading": "What does it mean to believe?",
        "paragraphs": [
          "John 20:30–31 explains that the Gospel was written so readers might believe that Jesus is the Christ, the Son of God.",
          "Believing in Jesus involves more than knowing facts about Him. It calls us to trust Him, listen to His teaching and follow Him."
        ]
      }
    ],
    "questions": [
      "What does John 1:1–14 reveal about Jesus?",
      "According to Luke 19:10, why did Jesus come?",
      "What is the purpose of John's Gospel?",
      "How might knowing Jesus change the way we live?"
    ],
    "application": "Read John chapter 1 and write down what you learn about Jesus. Discuss your questions with someone who can study the Bible with you."
  },
  {
    "slug": "why-do-we-need-a-saviour",
    "category": "bible-studies",
    "title": "Why Do We Need a Saviour?",
    "topic": "The Gospel",
    "summary": "Explore sin, forgiveness, reconciliation and the grace of God revealed through Christ.",
    "scriptures": [
      "Romans 3:23–24",
      "Romans 5:6–11",
      "Ephesians 2:1–10"
    ],
    "sections": [
      {
        "heading": "Understanding sin",
        "paragraphs": [
          "Romans 3:23 teaches that all have sinned and come short of the glory of God. Sin is not merely a collection of mistakes; it reflects humanity's departure from God's will.",
          "Recognizing our need for forgiveness helps us understand why the Gospel is such good news."
        ]
      },
      {
        "heading": "God's love revealed",
        "paragraphs": [
          "Romans 5:8 describes God's love demonstrated through Christ's death for sinners.",
          "God's offer of reconciliation is not based on our ability to make ourselves worthy. It begins with His love and grace."
        ]
      },
      {
        "heading": "Saved by grace",
        "paragraphs": [
          "Ephesians 2:8–10 describes salvation as God's gift, received through faith, and explains that believers are created in Christ for good works.",
          "Obedience is the response of a trusting disciple, not a means of purchasing God's forgiveness."
        ]
      }
    ],
    "questions": [
      "What does Romans 3:23 teach about humanity?",
      "How does Christ's death demonstrate God's love?",
      "What is the relationship between grace, faith and good works?",
      "Why is forgiveness central to the Gospel?"
    ],
    "application": "Read Romans 5:1–11 and reflect on the difference between earning forgiveness and receiving God's grace."
  },
  {
    "slug": "what-must-i-do-to-be-saved",
    "category": "bible-studies",
    "title": "What Must I Do to Be Saved?",
    "topic": "Salvation",
    "summary": "Study the Gospel and the New Testament response of faith, repentance, confession, baptism and discipleship.",
    "scriptures": [
      "Acts 2:36–42",
      "Romans 10:9–17",
      "Romans 6:1–4"
    ],
    "sections": [
      {
        "heading": "The foundation of salvation",
        "paragraphs": [
          "The Gospel announces the death, burial and resurrection of Jesus Christ (1 Corinthians 15:1–4). Salvation rests upon what God has accomplished through Christ.",
          "Our response to the Gospel must be understood in the context of God's grace."
        ]
      },
      {
        "heading": "Responding to the Gospel",
        "paragraphs": [
          "Faith comes through hearing God's Word (Romans 10:17). Scripture calls people to believe in Jesus, repent of sin and confess Him as Lord.",
          "In Acts 2:38, Peter calls his hearers to repent and be baptized in the name of Jesus Christ for the remission of sins."
        ]
      },
      {
        "heading": "Walking in newness of life",
        "paragraphs": [
          "Romans 6:1–4 connects baptism with Christ's death and resurrection and describes the believer's new life.",
          "Acts 2:42 shows the early Christians continuing in teaching, fellowship, breaking of bread and prayers. Following Christ is a lifelong commitment."
        ]
      }
    ],
    "questions": [
      "What is the Gospel according to 1 Corinthians 15?",
      "How did Peter answer the question in Acts 2:37?",
      "What does Romans 6 teach about baptism?",
      "How did the first Christians continue growing in faith?"
    ],
    "application": "Read Acts chapter 2 in context. If you have questions about repentance, baptism or following Christ, arrange a personal Bible study."
  },
  {
    "slug": "how-to-study-the-bible",
    "category": "bible-studies",
    "title": "How to Study the Bible",
    "topic": "Understanding Scripture",
    "summary": "Learn practical ways to read Scripture carefully, understand context and apply Biblical teaching.",
    "scriptures": [
      "Acts 17:11",
      "2 Timothy 3:16–17",
      "James 1:22–25"
    ],
    "sections": [
      {
        "heading": "Begin with the text",
        "paragraphs": [
          "Read a passage carefully before drawing conclusions. Notice its words, surrounding paragraphs, purpose and audience.",
          "A single verse should be understood in its context rather than isolated from the message of the book."
        ]
      },
      {
        "heading": "Examine the Scriptures",
        "paragraphs": [
          "Acts 17:11 describes the Bereans receiving the message readily and searching the Scriptures daily to examine what they were taught.",
          "Compare passages that address the same subject. Distinguish what the text explicitly says from assumptions we bring to it."
        ]
      },
      {
        "heading": "Put the Word into practice",
        "paragraphs": [
          "James 1:22 encourages believers to be doers of the Word, not hearers only.",
          "Bible study should lead to understanding, faithful obedience and growth in our relationship with God."
        ]
      }
    ],
    "questions": [
      "Why is the context of a passage important?",
      "What can we learn from the Bereans?",
      "How can we distinguish Scripture from our assumptions?",
      "What does it mean to be a doer of the Word?"
    ],
    "application": "Choose a chapter from the Gospel of Mark. Record its main message, questions you have and one practical application."
  },
  {
    "slug": "what-is-the-church",
    "category": "bible-studies",
    "title": "What Is the Church?",
    "topic": "The Church",
    "summary": "Discover the New Testament picture of the church, its relationship to Christ and the life of its members.",
    "scriptures": [
      "Matthew 16:18",
      "Acts 2:42–47",
      "Colossians 1:18"
    ],
    "sections": [
      {
        "heading": "Christ and His church",
        "paragraphs": [
          "In Matthew 16:18, Jesus speaks of building His church. Colossians 1:18 describes Him as the head of the body, the church.",
          "The church belongs to Christ. Its identity is grounded in Him rather than in a building or human personality."
        ]
      },
      {
        "heading": "Life among the first Christians",
        "paragraphs": [
          "Acts 2:42–47 describes Christians continuing in the apostles' teaching, fellowship, breaking of bread and prayers.",
          "Their shared faith was expressed through worship, generosity and concern for one another."
        ]
      },
      {
        "heading": "Growing together in Christ",
        "paragraphs": [
          "Hebrews 10:24–25 encourages Christians to assemble together and stir one another towards love and good works.",
          "Local congregations provide opportunities to worship, learn, serve and encourage fellow disciples."
        ]
      }
    ],
    "questions": [
      "Who is the head of the church?",
      "What characterized the life of the early Christians?",
      "Why is Christian fellowship important?",
      "How can a congregation encourage faithful discipleship?"
    ],
    "application": "Read Acts 2:42–47 and compare its description of Christian fellowship with the way believers can serve one another today."
  },
  {
    "slug": "keep-your-eyes-on-jesus",
    "category": "sermons",
    "title": "Keep Your Eyes on Jesus",
    "topic": "Faith and Endurance",
    "summary": "A sermon outline about perseverance, spiritual focus and following Christ through difficulties.",
    "scriptures": [
      "Hebrews 12:1–3",
      "Matthew 14:28–31"
    ],
    "sections": [
      {
        "heading": "Lay aside every weight",
        "paragraphs": [
          "Hebrews 12:1 describes the Christian life as a race requiring patience and the removal of everything that hinders faithful living.",
          "Consider the habits, distractions and sins that prevent us from following Christ faithfully."
        ]
      },
      {
        "heading": "Look unto Jesus",
        "paragraphs": [
          "Hebrews 12:2 directs our attention towards Jesus, the author and finisher of our faith.",
          "Christ endured suffering and remained faithful. His example reminds us where our spiritual focus belongs."
        ]
      },
      {
        "heading": "Continue with endurance",
        "paragraphs": [
          "In Matthew 14, Peter's experience on the water illustrates the contrast between trusting Christ and becoming overwhelmed by fear.",
          "Christian perseverance does not mean difficulties disappear. It means continuing to trust and follow Christ through them."
        ]
      }
    ],
    "questions": [
      "What weights can hinder spiritual growth?",
      "Why does Hebrews direct our attention to Jesus?",
      "How can we remain faithful during difficult circumstances?"
    ],
    "application": "Identify one distraction that is hindering your spiritual life and consider how to address it through prayer, Scripture and faithful action."
  },
  {
    "slug": "walking-by-faith-not-by-sight",
    "category": "sermons",
    "title": "Walking by Faith, Not by Sight",
    "topic": "Faith and Endurance",
    "summary": "A sermon outline exploring trust in God and eternal hope during uncertainty.",
    "scriptures": [
      "2 Corinthians 5:1–10",
      "Hebrews 11:1–6"
    ],
    "sections": [
      {
        "heading": "Our present circumstances",
        "paragraphs": [
          "Paul contrasts the temporary nature of earthly life with the hope believers have in God.",
          "Christian hope is not limited to present comfort or visible circumstances."
        ]
      },
      {
        "heading": "Faith beyond what we see",
        "paragraphs": [
          "Second Corinthians 5:7 teaches that Christians walk by faith, not by sight.",
          "Faith is not the rejection of truth or evidence. It is trust in God's promises that shapes our decisions."
        ]
      },
      {
        "heading": "Living to please the Lord",
        "paragraphs": [
          "In 2 Corinthians 5:9–10, Paul connects Christian hope with the desire to please Christ and the reality of accountability before Him.",
          "Faith should influence how we serve, speak, endure difficulties and treat other people."
        ]
      }
    ],
    "questions": [
      "What contrast does Paul draw in 2 Corinthians 5?",
      "How does faith influence everyday decisions?",
      "What does it mean to live in a way that pleases Christ?"
    ],
    "application": "Read 2 Corinthians 5:1–10 and consider how eternal hope changes your perspective on present difficulties."
  },
  {
    "category": "lords-supper",
    "slug": "in-remembrance-of-me",
    "title": "In Remembrance of Me",
    "topic": "Remembering Christ",
    "summary": "Reflect on the meaning of the Lord's Supper and the sacrifice Jesus made for us.",
    "scriptures": [
      "Luke 22:19–20",
      "1 Corinthians 11:23–26",
      "Acts 20:7"
    ],
    "sections": [
      {
        "heading": "Remember the body given for us",
        "paragraphs": [
          "When Jesus instituted the Lord's Supper, He took bread, gave thanks, broke it and instructed His disciples to remember Him.",
          "The bread directs our thoughts towards His body given for us. Communion is not merely a weekly routine but an opportunity to remember Christ with gratitude."
        ]
      },
      {
        "heading": "Remember the blood of the covenant",
        "paragraphs": [
          "Jesus associated the cup with the new covenant in His blood. His sacrifice stands at the centre of our reconciliation with God.",
          "Matthew 26:28 connects His blood with the forgiveness of sins. As Christians partake, they remember the cost of redemption."
        ]
      },
      {
        "heading": "Remember together",
        "paragraphs": [
          "Acts 20:7 records disciples gathering on the first day of the week to break bread.",
          "The Lord's Supper reminds Christians of their shared dependence on Christ and their fellowship in Him."
        ]
      }
    ],
    "questions": [
      "What did Jesus ask His disciples to remember?",
      "What does the cup direct our thoughts towards?",
      "How can we avoid treating communion as a routine?"
    ],
    "application": "Before partaking of the Lord's Supper, reflect on Luke 22:19–20 and give thanks for the sacrifice of Jesus."
  },
  {
    "category": "lords-supper",
    "slug": "the-price-of-our-redemption",
    "title": "The Price of Our Redemption",
    "topic": "The Cross",
    "summary": "Consider the incomparable value of Christ's sacrifice and the redemption made possible through Him.",
    "scriptures": [
      "1 Peter 1:18–19",
      "Isaiah 53:4–6",
      "Ephesians 1:7"
    ],
    "sections": [
      {
        "heading": "Not redeemed with silver or gold",
        "paragraphs": [
          "Peter reminds Christians that they were not redeemed with corruptible things such as silver and gold.",
          "Our redemption is associated with the precious blood of Christ. Its value cannot be measured in earthly wealth."
        ]
      },
      {
        "heading": "The suffering servant",
        "paragraphs": [
          "Isaiah 53 describes the suffering of one who bears the consequences of others' wrongdoing.",
          "Christians understand this passage in light of Jesus and His sacrifice. First Peter 2:24 connects His suffering with our opportunity to live unto righteousness."
        ]
      },
      {
        "heading": "Living in gratitude",
        "paragraphs": [
          "Ephesians 1:7 connects redemption and forgiveness with the riches of God's grace.",
          "Remembering the price of redemption should encourage humility, thanksgiving and faithful living."
        ]
      }
    ],
    "questions": [
      "Why does Peter contrast Christ's blood with silver and gold?",
      "How does Isaiah 53 help us reflect on Christ's suffering?",
      "What does redemption mean for the way we live?"
    ],
    "application": "During communion, reflect on the grace of God and the life Christ gave for us."
  },
  {
    "category": "lords-supper",
    "slug": "let-a-man-examine-himself",
    "title": "Let a Man Examine Himself",
    "topic": "Self-examination",
    "summary": "Explore Paul's instructions about approaching the Lord's Supper with reverence and understanding.",
    "scriptures": [
      "1 Corinthians 11:17–34",
      "2 Corinthians 13:5"
    ],
    "sections": [
      {
        "heading": "Understanding the context",
        "paragraphs": [
          "Paul addresses divisions and selfish behaviour among Christians in Corinth when they assembled.",
          "Their conduct contradicted the meaning of the Lord's Supper. They needed to remember both Christ's sacrifice and their responsibilities towards one another."
        ]
      },
      {
        "heading": "Examine ourselves",
        "paragraphs": [
          "First Corinthians 11:28 calls each person to examine himself and then partake of the bread and cup.",
          "This is not a demand that Christians become morally perfect before remembering Christ. It is a call to approach communion thoughtfully and reverently."
        ]
      },
      {
        "heading": "Recognize the significance",
        "paragraphs": [
          "Paul warns against partaking in an unworthy manner and failing to discern the body.",
          "We should consider the meaning of Christ's sacrifice and the importance of love, unity and concern for fellow Christians."
        ]
      }
    ],
    "questions": [
      "What problems was Paul addressing in Corinth?",
      "What does self-examination involve?",
      "How should remembering Christ influence our treatment of others?"
    ],
    "application": "Spend time in honest reflection, prayer and thanksgiving before participating in communion."
  },
  {
    "category": "lords-supper",
    "slug": "till-he-come",
    "title": "Till He Come",
    "topic": "Christian Hope",
    "summary": "The Lord's Supper looks back to the cross and forward to the return of Jesus Christ.",
    "scriptures": [
      "1 Corinthians 11:26",
      "John 14:1–3",
      "1 Thessalonians 4:13–18"
    ],
    "sections": [
      {
        "heading": "Looking back",
        "paragraphs": [
          "Whenever Christians eat the bread and drink the cup, they proclaim the Lord's death.",
          "The cross remains central to the Christian faith and reminds us of God's love and grace."
        ]
      },
      {
        "heading": "Living in the present",
        "paragraphs": [
          "Remembering Christ should shape our lives throughout the week, not merely during the assembly.",
          "The Gospel calls Christians to live faithfully, love one another and remain obedient to Christ."
        ]
      },
      {
        "heading": "Looking forward",
        "paragraphs": [
          "Paul's words 'till he come' direct our attention towards the future return of Jesus.",
          "Communion therefore carries both remembrance and hope. Christians remember a crucified Saviour who rose from the dead and will return."
        ]
      }
    ],
    "questions": [
      "What do Christians proclaim through the Lord's Supper?",
      "Why is the resurrection central to Christian hope?",
      "How should the expectation of Christ's return affect our lives?"
    ],
    "application": "Reflect on the connection between Christ's death, resurrection and promised return when observing the Lord's Supper."
  },
  {
    "category": "questions-and-answers",
    "slug": "does-god-love-me",
    "title": "Does God Love Me?",
    "topic": "Knowing God",
    "summary": "Explore what Scripture reveals about God's love for humanity.",
    "scriptures": [
      "John 3:16–17",
      "Romans 5:6–11",
      "1 John 4:9–10"
    ],
    "sections": [
      {
        "heading": "God's love revealed through Christ",
        "paragraphs": [
          "John 3:16 describes God's love for the world through the giving of His Son.",
          "Scripture directs us towards Christ's sacrifice as a central demonstration of God's love."
        ]
      },
      {
        "heading": "Love demonstrated towards sinners",
        "paragraphs": [
          "Romans 5:8 teaches that Christ died for us while we were still sinners.",
          "God's love is not something we purchase through achievement or personal success."
        ]
      },
      {
        "heading": "Responding to His love",
        "paragraphs": [
          "The appropriate response to God's love is faith, repentance, gratitude and obedience.",
          "First John 4 encourages Christians to reflect God's love in their relationships with others."
        ]
      }
    ],
    "questions": [
      "How does Scripture demonstrate God's love?",
      "What does Romans 5:8 reveal about grace?",
      "How can we reflect God's love towards others?"
    ],
    "application": "Read John chapter 3 and consider how the giving of Jesus reveals God's desire for humanity's salvation.",
    "answer": "Yes. Scripture teaches that God loves humanity, and His love is demonstrated through the giving of Jesus Christ. John 3:16 and Romans 5:8 direct us to Christ rather than our circumstances as evidence of God's love."
  },
  {
    "category": "questions-and-answers",
    "slug": "why-does-god-allow-suffering",
    "title": "Why Does God Allow Suffering?",
    "topic": "Faith and Difficulties",
    "summary": "Consider Biblical perspectives on suffering, human responsibility, compassion and eternal hope.",
    "scriptures": [
      "John 9:1–3",
      "Romans 8:18–25",
      "James 1:2–4"
    ],
    "sections": [
      {
        "heading": "Avoid simplistic explanations",
        "paragraphs": [
          "In John 9, Jesus rejects the assumption that a man's blindness must have resulted from a particular sin committed by him or his parents.",
          "We should not automatically conclude that someone is suffering because God is punishing that person."
        ]
      },
      {
        "heading": "Faith in a suffering world",
        "paragraphs": [
          "Scripture describes a creation affected by corruption, weakness and suffering.",
          "Some suffering results from human choices, while other circumstances are beyond our understanding or control. The Bible does not reveal the precise reason for every individual hardship."
        ]
      },
      {
        "heading": "Compassion and hope",
        "paragraphs": [
          "Jesus showed compassion towards those who suffered. Christians are likewise called to bear one another's burdens.",
          "Romans 8 points towards future hope while recognizing the reality of present suffering."
        ]
      }
    ],
    "questions": [
      "What assumption did Jesus reject in John 9?",
      "Why should we avoid blaming people for their suffering?",
      "How can Christians respond compassionately to someone experiencing hardship?"
    ],
    "application": "Read Romans 8:18–25 and consider practical ways to support someone who is experiencing difficulty.",
    "answer": "The Bible does not give a specific explanation for every instance of suffering. It acknowledges human wrongdoing, the brokenness of creation and circumstances we cannot fully understand. Christians are called to respond with compassion, faith and hope in God."
  },
  {
    "category": "questions-and-answers",
    "slug": "how-do-i-pray",
    "title": "How Do I Pray?",
    "topic": "Prayer",
    "summary": "Learn from the teaching of Jesus about approaching God in prayer.",
    "scriptures": [
      "Matthew 6:5–13",
      "Philippians 4:6–7",
      "1 Thessalonians 5:16–18"
    ],
    "sections": [
      {
        "heading": "Pray sincerely",
        "paragraphs": [
          "Jesus warns against praying merely to impress other people. Prayer is directed towards God rather than a human audience.",
          "We can approach God sincerely without elaborate language or public recognition."
        ]
      },
      {
        "heading": "Learn from Jesus",
        "paragraphs": [
          "The model prayer in Matthew 6 begins with reverence for God and concern for His will.",
          "It includes requests for daily needs, forgiveness and deliverance from evil."
        ]
      },
      {
        "heading": "Pray with thanksgiving",
        "paragraphs": [
          "Philippians 4 encourages prayer and supplication with thanksgiving.",
          "Prayer allows Christians to express gratitude, confess their needs and seek God's guidance."
        ]
      }
    ],
    "questions": [
      "What attitude does Jesus warn against in Matthew 6?",
      "What priorities are found in the model prayer?",
      "How can thanksgiving become part of our daily prayers?"
    ],
    "application": "Set aside time to read Matthew 6:5–13 and pray sincerely, using Jesus' teaching as your guide.",
    "answer": "Prayer is sincere communication with God. Jesus teaches us to pray with reverence, seek God's will, express our needs, ask for forgiveness and avoid praying merely to impress others."
  },
  {
    "category": "questions-and-answers",
    "slug": "is-baptism-necessary-for-salvation",
    "title": "Is Baptism Necessary for Salvation?",
    "topic": "Salvation and Baptism",
    "summary": "Examine how baptism is presented in the New Testament response to the Gospel.",
    "scriptures": [
      "Acts 2:36–41",
      "Romans 6:3–4",
      "1 Peter 3:21"
    ],
    "sections": [
      {
        "heading": "The foundation is Jesus Christ",
        "paragraphs": [
          "Salvation rests on God's grace and the death, burial and resurrection of Jesus Christ.",
          "Baptism must be understood in that context, rather than as a human achievement that earns salvation."
        ]
      },
      {
        "heading": "The response in Acts",
        "paragraphs": [
          "When Peter's hearers asked what they should do, he instructed them to repent and be baptized in the name of Jesus Christ for the remission of sins.",
          "Acts 2:41 records that those who gladly received the message were baptized."
        ]
      },
      {
        "heading": "United with Christ",
        "paragraphs": [
          "Romans 6:3–4 connects baptism with Christ's death and burial and the beginning of a new life.",
          "First Peter 3:21 distinguishes baptism from the mere washing of the body and connects salvation with the resurrection of Jesus Christ."
        ]
      }
    ],
    "questions": [
      "How did Peter respond to his hearers in Acts 2?",
      "What does Romans 6 teach about baptism?",
      "Why must baptism be understood in the context of God's grace?"
    ],
    "application": "Read Acts 2 and Romans 6 in their full context. Discuss any questions about baptism with a local congregation.",
    "answer": "Churches of Christ understand baptism as part of the New Testament response of faith to the Gospel, not as a work that earns salvation. Acts 2:38 connects repentance and baptism with forgiveness, while Romans 6:3–4 connects baptism with Christ's death and resurrection. Other Christian traditions interpret these passages differently."
  },
  {
    "category": "questions-and-answers",
    "slug": "why-should-christians-gather-together",
    "title": "Why Should Christians Gather Together?",
    "topic": "The Church and Worship",
    "summary": "Discover the Biblical purpose of Christian assembly, worship and mutual encouragement.",
    "scriptures": [
      "Hebrews 10:24–25",
      "Acts 2:42–47",
      "1 Corinthians 12:12–27"
    ],
    "sections": [
      {
        "heading": "Encourage one another",
        "paragraphs": [
          "Hebrews 10 connects Christian assembly with encouraging love and good works.",
          "Gathering is an opportunity to strengthen others as well as to receive encouragement ourselves."
        ]
      },
      {
        "heading": "Learn and worship together",
        "paragraphs": [
          "Acts 2 describes early Christians continuing in the apostles' teaching, fellowship, breaking of bread and prayers.",
          "These shared practices helped form a community centred on Christ."
        ]
      },
      {
        "heading": "Serve as members of one body",
        "paragraphs": [
          "First Corinthians 12 describes Christians as members of one body with different functions.",
          "Every member matters, and Christians are called to care for one another."
        ]
      }
    ],
    "questions": [
      "What purpose does Hebrews give for assembling?",
      "How did early Christians share their spiritual lives?",
      "How can we encourage other members of the church?"
    ],
    "application": "Consider visiting a local congregation and exploring opportunities for worship, Bible study and fellowship.",
    "answer": "Christians gather to worship God, learn Scripture, remember Christ and encourage one another. Hebrews 10:24–25 emphasizes mutual encouragement, while Acts 2:42 describes the shared spiritual practices of early Christians."
  },
  {
    "category": "questions-and-answers",
    "slug": "can-i-visit-if-i-am-not-a-christian",
    "title": "Can I Visit a Church If I Am Not a Christian?",
    "topic": "Visiting the Church",
    "summary": "Learn what to expect when visiting a Christian congregation for the first time.",
    "scriptures": [
      "1 Corinthians 14:23–25",
      "Acts 17:11",
      "John 1:45–46"
    ],
    "sections": [
      {
        "heading": "Come and learn",
        "paragraphs": [
          "You do not need to have extensive Biblical knowledge before exploring Christianity.",
          "First Corinthians 14 recognizes that people who are not believers may enter a Christian assembly."
        ]
      },
      {
        "heading": "Questions are welcome",
        "paragraphs": [
          "Acts 17:11 describes people examining Scripture to understand what they were being taught.",
          "Visitors are encouraged to listen, read Scripture and ask sincere questions."
        ]
      },
      {
        "heading": "Preparing for your first visit",
        "paragraphs": [
          "Explore general information about Christian worship and the areas served by Churches of Christ.",
          "If you have questions about participating in worship or the Lord's Supper, speak with the congregation beforehand."
        ]
      }
    ],
    "questions": [
      "What would you like to learn about Christianity?",
      "What questions would you like to explore in Scripture?",
      "Would you prefer to visit worship or begin with a personal Bible study?"
    ],
    "application": "Explore the congregation directory and the written Bible study resources.",
    "answer": "Yes. You are welcome to enquire about visiting a Church of Christ even if you are not a Christian. You can listen, learn and ask questions without needing to make a commitment before attending."
  },
  {
    "slug": "be-still-and-know",
    "category": "devotionals",
    "title": "Be Still and Know That I Am God",
    "topic": "Trusting God",
    "summary": "Finding confidence in God's sovereignty when life feels uncertain.",
    "scriptures": [
      "Psalm 46:1–11",
      "Philippians 4:6–7"
    ],
    "sections": [
      {
        "heading": "God is our refuge",
        "paragraphs": [
          "Psalm 46 begins by describing God as our refuge and strength, a very present help in trouble.",
          "The Psalm does not describe a world without difficulty. It acknowledges turmoil while directing our attention towards the power and faithfulness of God."
        ]
      },
      {
        "heading": "Be still before God",
        "paragraphs": [
          "Psalm 46:10 calls us to recognize that God is God. Our confidence does not depend upon our ability to control every circumstance.",
          "Stillness before God can involve surrendering anxious striving and remembering His authority."
        ]
      },
      {
        "heading": "Trust expressed through prayer",
        "paragraphs": [
          "Philippians 4 encourages believers to bring their concerns before God with thanksgiving.",
          "Prayer is an expression of dependence upon Him, even when the circumstances surrounding us remain difficult."
        ]
      }
    ],
    "questions": [
      "What does Psalm 46 teach about God's character?",
      "What circumstances are difficult for you to control?",
      "How can prayer help you express your trust in God?"
    ],
    "application": "Read Psalm 46 slowly. Set aside time for prayer, thanksgiving and reflection on God's sovereignty."
  },
  {
    "slug": "the-wilderness-is-not-the-end",
    "category": "devotionals",
    "title": "The Wilderness Is Not the End",
    "topic": "Faith through Trials",
    "summary": "Learn from Jesus' response to temptation and difficulty in the wilderness.",
    "scriptures": [
      "Matthew 4:1–11",
      "Deuteronomy 8:2–3",
      "James 1:2–4"
    ],
    "sections": [
      {
        "heading": "A place of testing",
        "paragraphs": [
          "Matthew 4 records Jesus being led into the wilderness, where He faced temptation after fasting forty days and forty nights.",
          "The wilderness was a place of testing, but it did not define the entirety of His mission."
        ]
      },
      {
        "heading": "Responding with Scripture",
        "paragraphs": [
          "Jesus answered temptation by appealing to the Word of God.",
          "His response teaches us the importance of knowing Scripture and remaining faithful rather than allowing immediate desires to determine our decisions."
        ]
      },
      {
        "heading": "Remaining faithful through uncertainty",
        "paragraphs": [
          "Difficult seasons can expose our priorities and weaknesses. James encourages Christians to endure trials with faith and patience.",
          "We cannot assume that every hardship has the same purpose, but we can seek to respond faithfully in every circumstance."
        ]
      }
    ],
    "questions": [
      "How did Jesus respond to temptation?",
      "What can we learn from His dependence on Scripture?",
      "How can we remain faithful during difficult seasons?"
    ],
    "application": "Read Matthew 4:1–11. Identify one Biblical teaching that can guide your response to a current difficulty."
  },
  {
    "slug": "strength-in-weakness",
    "category": "devotionals",
    "title": "Strength in Weakness",
    "topic": "Grace and Endurance",
    "summary": "Discover how God's grace sustains faithful disciples through their limitations.",
    "scriptures": [
      "2 Corinthians 12:7–10",
      "Isaiah 40:28–31"
    ],
    "sections": [
      {
        "heading": "Paul's weakness",
        "paragraphs": [
          "Paul describes a thorn in the flesh and his repeated requests for its removal.",
          "Scripture does not identify the precise nature of the thorn, but it records the answer Paul received."
        ]
      },
      {
        "heading": "My grace is sufficient",
        "paragraphs": [
          "The Lord tells Paul that His grace is sufficient and that His strength is made perfect in weakness.",
          "Paul learns to depend upon the power of Christ rather than treating his own abilities as the foundation of his confidence."
        ]
      },
      {
        "heading": "Living with dependence upon God",
        "paragraphs": [
          "Christian faith does not guarantee the immediate removal of every difficulty.",
          "It encourages humility, prayer, perseverance and dependence upon God throughout the challenges of life."
        ]
      }
    ],
    "questions": [
      "How did Paul respond to his difficulty?",
      "What does sufficient grace mean in this passage?",
      "How can our limitations encourage humility?"
    ],
    "application": "Reflect on 2 Corinthians 12:9 and pray for wisdom, endurance and faithful dependence upon God."
  },
  {
    "slug": "a-light-unto-my-path",
    "category": "devotionals",
    "title": "A Light Unto My Path",
    "topic": "Understanding Scripture",
    "summary": "Allow God's Word to guide your choices, priorities and spiritual growth.",
    "scriptures": [
      "Psalm 119:97–112",
      "2 Timothy 3:16–17",
      "James 1:22"
    ],
    "sections": [
      {
        "heading": "The Word as our guide",
        "paragraphs": [
          "Psalm 119:105 describes God's Word as a lamp unto our feet and a light unto our path.",
          "Scripture provides direction for faithful living and reveals principles that help us examine our choices."
        ]
      },
      {
        "heading": "Growing in understanding",
        "paragraphs": [
          "Reading the Bible requires attention to context, patience and a willingness to learn.",
          "Rather than looking only for passages that confirm our preferences, we should seek to understand what God has revealed."
        ]
      },
      {
        "heading": "Living what we learn",
        "paragraphs": [
          "James calls believers to be doers of the Word and not hearers only.",
          "Spiritual growth involves applying Biblical teaching to our relationships, decisions and conduct."
        ]
      }
    ],
    "questions": [
      "What does the image of a lamp teach us?",
      "How can we improve our approach to reading Scripture?",
      "What Biblical teaching can you put into practice today?"
    ],
    "application": "Read a chapter of Scripture today. Record its main teaching and one practical way to apply it."
  },
  {
    "slug": "love-one-another",
    "category": "devotionals",
    "title": "Love One Another",
    "topic": "Christian Living",
    "summary": "Explore Christ's command to love others as He has loved us.",
    "scriptures": [
      "John 13:34–35",
      "1 Corinthians 13:4–7",
      "1 John 4:7–12"
    ],
    "sections": [
      {
        "heading": "The example of Jesus",
        "paragraphs": [
          "Jesus commands His disciples to love one another as He has loved them.",
          "His life demonstrates compassion, humility, service and sacrificial love."
        ]
      },
      {
        "heading": "Love expressed in action",
        "paragraphs": [
          "First Corinthians 13 describes love through patience, kindness and conduct towards others.",
          "Christian love is more than a feeling. It becomes visible through the way we speak, serve and respond to people."
        ]
      },
      {
        "heading": "A mark of discipleship",
        "paragraphs": [
          "John 13:35 connects the love of Christ's disciples with their witness to others.",
          "Our relationships should reflect the character of the One we follow."
        ]
      }
    ],
    "questions": [
      "What standard of love does Jesus establish?",
      "How does First Corinthians 13 describe love?",
      "Who could benefit from a practical act of kindness today?"
    ],
    "application": "Choose a practical way to encourage or serve someone today without seeking recognition."
  }
];

export const resourceHref = (r: BiblicalResource) =>
  `/resources/${r.category}/${r.slug}/`;

export const getResources = (category: ResourceCategory) =>
  biblicalResources.filter(r => r.category === category);

export const featuredStudy =
  biblicalResources.find(r => r.category === "bible-studies")!;

export function getRelatedResources(resource: BiblicalResource) {
  return biblicalResources
    .filter(r => r !== resource)
    .sort((a, b) =>
      Number(b.topic === resource.topic) -
      Number(a.topic === resource.topic) ||
      Number(b.category === resource.category) -
      Number(a.category === resource.category)
    )
    .slice(0, 3);
}


export const resourceCategories = {
  "bible-studies": {
    title: "Bible Studies",
    type: "Bible study",
    action: "Begin study",
    headline: "Discover truth through God's Word.",
    description: "Explore Scripture through guided lessons, questions and practical applications.",
    heading: "Choose your next Bible study.",
    intro: "Use these lessons individually, with your family or as part of a group Bible study.",
    quote: "Thy word is a lamp unto my feet, and a light unto my path.",
    reference: "Psalm 119:105",
    printLabel: "study"
  },
  "sermons": {
    title: "Sermons",
    type: "Sermon outline",
    action: "Read outline",
    headline: "Grow through Biblical teaching.",
    description: "Explore written sermon outlines and Biblical messages for personal study and spiritual growth.",
    heading: "Explore sermon outlines.",
    intro: "These written outlines are study resources, not recordings of services. Audio and video can be added as they become available.",
    quote: "Preach the word; be instant in season, out of season.",
    reference: "2 Timothy 4:2",
    printLabel: "outline"
  },
  "lords-supper": {
    title: "The Lord's Supper",
    type: "Communion reflection",
    action: "Read reflection",
    headline: "Remember the sacrifice of Jesus.",
    description: "Prepare your heart for the Lord's Supper through Scripture, reflection and thanksgiving.",
    heading: "Reflect upon the cross.",
    intro: "Explore these reflections before communion or use them as foundations for Lord's Supper talks.",
    quote: "This do in remembrance of me.",
    reference: "Luke 22:19",
    printLabel: "reflection"
  },
  "questions-and-answers": {
    title: "Biblical Q&A",
    type: "Biblical answer",
    action: "Explore answer",
    headline: "Honest questions. Biblical answers.",
    description: "Explore questions about Jesus, God, salvation, prayer, suffering and the Christian faith.",
    heading: "What would you like to understand?",
    intro: "Begin with a direct answer, then examine the relevant Scriptures in context. You are welcome to explore even if you are new to Christianity.",
    quote: "Thy word is truth.",
    reference: "John 17:17",
    printLabel: "article"
  },
  "devotionals": {
    title: "Devotionals",
    type: "Devotional",
    action: "Read devotional",
    headline: "Walk with Christ every day.",
    description: "Find encouragement, wisdom and guidance for everyday Christian living through Scripture.",
    heading: "Make time for God's Word.",
    intro: "Read these reflections at your own pace. Begin with Scripture, reflect on its teaching and consider how to apply it.",
    quote: "Thy word is a lamp unto my feet, and a light unto my path.",
    reference: "Psalm 119:105",
    printLabel: "devotional"
  }
} satisfies Record<ResourceCategory, {
  title: string;
  type: string;
  action: string;
  headline: string;
  description: string;
  heading: string;
  intro: string;
  quote: string;
  reference: string;
  printLabel: string;
}>;
