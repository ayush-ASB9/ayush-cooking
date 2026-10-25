export type Chapter = {
  number: string
  title: string
  paragraphs: string[]
  note?: string
}

export const chapters: Chapter[] = [
  { number: '01', title: 'before i knew what i was doing', paragraphs: [
    'everything started when i was 15. i had recently passed out of 10th grade. i was a pretty curious kid even back then, and my youtube feed was pretty different.',
    'i started exploring what career options existed in finance. not gonna lie, i even tried studying CFA and quant at 15 from TVS lectures.',
    "that's how i got to know about VCs, hedge funds, private equity, investment banking, startups, and all these different worlds.",
    'i also completed two virtual job simulations on Forage: risk management from Goldman Sachs and private equity and M&A from Goodwin.',
    'i belong to a tiny village in Haryana, India. then my sister bought a laptop. i think i had turned 16 by that time. i made a LinkedIn profile and published two posts. that was pretty much it at first.',
    'then i discovered Formula 1, and it was pretty damn cool.'
  ]},
  { number: '02', title: 'ASB9 Insights and the first rabbit holes', paragraphs: [
    'i started ASB9 Insights, making decks on LinkedIn and writing on Substack.',
    'eventually, i started exploring transmedia strategies in anime and sports. i was interested in understanding how stories, intellectual property, entertainment, and sports businesses work beyond what the audience sees.',
    "i wasn't just interested in consuming things. i wanted to understand the machinery underneath them."
  ]},
  { number: '03', title: 'my first investment memo', paragraphs: [
    'one day, when i was almost done with 11th grade, i was scrolling YouTube and a video of a Y Combinator partner explaining investment memos appeared in my feed.',
    'of course i knew what YC was. but did i know what an investment memo was? nope.',
    'i loved that video. and guess what i did that same day?',
    'i went to LinkedIn and searched for startups led by young founders. AI was involved in the process of finding a lead.',
    'i found a potential opportunity, reached out to the founder, researched funds that invested in young founders, and discovered Campus Fund.',
    'then i reached out to two Campus Fund associates: one from SRCC and one from IIT Bombay. i told them i had a deal for them. they said i could send the deck.',
    'after talking to the founder, i wrote an investment memo myself. it was my first memo. i sent it to those two associates.',
    'later, both associates cut me out of the deal and connected directly with the founder. and that was that. except it wasn\'t.'
  ]},
  { number: '04', title: 'Hidden Layer Ventures', paragraphs: [
    'after being cut out of that deal, i went out and created a LinkedIn company page called Hidden Layer Ventures.',
    'i used AI and LinkedIn to recruit four people:',
    'a 16-year-old UI/UX designer with brand strategy experience; a 17-year-old who had ranked first in a national commerce olympiad, was a recognized debater, and had ranked first in multiple pitch competitions; a 17-year-old among 100 students selected for a Bajaj Finserv and capital markets experience; and a 19-year-old Delhi University student and CFA aspirant.',
    'it ran for a short period. then the team started falling apart. one member fell ill, and two others had bandwidth problems. eventually, only the designer and i were left.',
    'the project dissolved.'
  ], note: 'do not make up a heroic explanation for why it dissolved. the facts are enough.' },
  { number: '05', title: 'Ezoraise and the reality check', paragraphs: [
    "we didn't stop building. this time, we tried Ezoraise.",
    'instead of simply creating a LinkedIn page and hiring a team immediately, we tried to plan first. we even flipped the business model overnight.',
    'somehow, we managed to secure a meeting with Impactful Pitch, a competitor with a track record that included over $1 billion in fundraising and experience helping multiple Shark Tank India startups.',
    'that meeting gave me a pretty big reality check. and, not gonna lie, i was literally crying afterward.',
    'Ezoraise shut down. i also cleared the application round for SRCC FIC during this period but failed pretty badly in the interview round.',
    'these things happened. don\'t invent a redemption arc.',
    'the Impactful Pitch meeting also opened another route: working with them. they offered me ₹36,000 plus a share of the success fee. however, i was under 18, and my parents needed to sign the contract. my mother said no to the arrangement and told me to work for free instead.',
    'so i became an independent fundraising and M&A advisor.'
  ]},
  { number: '06', title: 'seven founders, five countries, and a lot of unpaid work', paragraphs: [
    'i helped seven founders across five different countries.',
    'my work included more than ten pitch deck reviews, investor research, fundraising strategies, and pitch positioning. i also collaborated with Impactful Pitch on selected deals.',
    'the work was pro bono. i did not make this into some glamorous consulting firm with a massive revenue number.',
    'but i learned a lot from the founders i worked with and from seeing how fundraising works in practice.',
    'i was in 12th grade by this point. and i started thinking: maybe it was time to build something of my own.'
  ]},
  { number: '07', title: 'finding a technical cofounder', paragraphs: [
    'i joined Hack Club. i was nontechnical, and my main reason for joining was to find a potential technical cofounder.',
    "i didn't even have to make a massive effort to find one. someone messaged me: a 16-year-old technical girl from Sri Lanka who was pretty great at the technical stuff i didn't understand.",
    'we became cofounders.',
    "we explored more than 15 startup ideas. we validated ideas in real time, talked to people, challenged each other's assumptions, and tried to figure out which ideas deserved to exist.",
    'i still don\'t understand a lot of technical things.',
    'my cofounder later announced a four-month career break to prepare for Harvard. she said our goal was still the same, even if YC W27 was no longer the target.',
    "maybe we're still cofounders. we'll see what happens."
  ], note: 'the startup idea graveyard is a record of the ideas that did not make it.'},
  { number: '08', title: 'looking for work and trying more things', paragraphs: [
    'after my cofounder took her break, i started looking for work. i was almost 17. i reached out to a lot of founders, mainly targeting Y Combinator startups.',
    'i also joined Rilo Commit in a growth role and Sierra Economic Research as a research trainee.',
    'eventually, on my 17th birthday, Tanush Chintala, founder of Kairos Health (YC F26), replied to me. i worked with him for a period of time.'
  ]},
  { number: '09', title: "things i do when i'm not supposed to be doing anything", paragraphs: [
    'alongside everything else, i spent a lot of my free time talking to young founders and trying to kill their startup ideas.',
    'not by insulting them. by challenging their assumptions, examining their logic, searching for weaknesses, and trying to figure out whether the idea would survive contact with reality.',
    'over time, i became confident enough to challenge ideas from people with decades of experience, too. and i genuinely enjoy doing this.',
    "i don't want to be the person who automatically validates an idea because its founder is excited about it.",
    'i want to understand why it might fail, what would prove it wrong, and whether there\'s something worth saving after the weak assumptions are removed.'
  ]},
  { number: '10', title: 'teaching myself technology', paragraphs: [
    'i also explored technology. i started as someone who didn\'t understand much about the technical side. now i can build websites and basic AI automations, and i have made small projects including XorvAI and LeadgerVoid.',
    'i have been learning through building, experimentation, conversations, and working alongside technical people.',
    'i am also exploring quantitative research and financial markets. do not claim i am an expert quant researcher or a senior software engineer. i am still learning.',
    'i have spoken to young technical builders, VCs, and founders from different countries.',
    'i am interested in different disciplines and keep exploring them rather than committing to a single neat label.'
  ]},
  { number: '11', title: 'where things stand now', paragraphs: [
    'i am 17, still in 12th grade, and stuck working on my college applications.',
    'i am still figuring out what i want to build. right now, i am building THEOFF9. it is in stealth, so do not reveal or invent its concept.',
    'i am also building ASB9 Club, an invite-only club for young builders, researchers, and people who are interested in creating things.',
    'my interests include startups, fundraising, M&A, financial markets, quantitative research, technology, business models, research, and challenging assumptions.',
    'i do not have a perfectly linear career story. i have explored a lot of different things, started projects, shut projects down, worked with people, learned things, and changed directions.',
    'i am still in the middle of the story.'
  ]}
]

export const projects = [
  ['ASB9 Insights', 'completed', 'decks on LinkedIn and writing about the machinery underneath anime, sports, entertainment, and business.'],
  ['Hidden Layer Ventures', 'discontinued', 'a short-lived team built after my first deal went sideways.'],
  ['Ezoraise', 'discontinued', 'an attempt at building a fundraising venture, followed by a fairly serious reality check.'],
  ['startup idea graveyard', 'ongoing', 'the ideas my cofounder and i explored, challenged, and did not build.'],
  ['XorvAI', 'experimental', 'a small technology and AI automation project.'],
  ['LeadgerVoid', 'experimental', 'another small project from teaching myself technology by building.'],
  ['THEOFF9', 'stealth', 'something i am building right now. the concept stays private.'],
  ['ASB9 Club', 'active', 'an invite-only community for young builders, researchers, and people interested in creating things.'],
  ['quantitative research experiments', 'exploring', 'learning about quantitative research and financial markets.'],
  ['personal technology experiments', 'ongoing', 'websites, automations, conversations, and whatever else i am trying to understand.']
] as const

export const testimonial = {
  quote: "Tenacious guy here! Didn't really think much of it when he first reached out to me, but he stayed hungry the entire way while working with me. He was doing things I hadn't even thought of, especially considering he had to learn everything about the US dental space in such a short period of time. Would highly recommend for any future opportunity",
  person: 'Tanush Chintala',
  role: 'Founder of Kairos Health (YC F26).'
}
