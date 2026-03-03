export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  icon: string;
  gradient: string;
}

export const posts: BlogPost[] = [
  {
    title: '3 new apps just joined the ByNeel family',
    slug: 'trois-nouvelles-apps-byneel',
    excerpt: 'ByNeel started with 3 apps. Now we\'re expanding to 6. Here\'s what\'s coming and why each one is different.',
    content: `## The ByNeel family is growing

When I launched ByNeel two years ago, the plan was simple: build a few apps that solved real problems. No venture capital, no hype, just me and Claude building things that mattered. CookBook AI was first — capturing recipes like a human would, with AI that actually understands food. Then came TipLog — because every tip calculator out there made me want to scream. OmniDrop followed — encrypted file transfers that don't spy on you.

Three apps. Three solid apps. That was supposed to be the whole story.

But then something happened. Ideas kept coming. Problems kept presenting themselves. And I realized: why stop at three?

So I didn't.

## Say hello to Ephemera, BridgeGen, and EarthPulse

**Ephemera** is the first one I'm excited to talk about. Imagine this: you're standing at the Eiffel Tower at sunset, and you open your phone to record a message, a photo, a memory. You lock it to this exact GPS coordinate and set it to unlock on a specific date — maybe in a year, maybe in five. You encrypt it so only someone with the exact GPS coordinates AND the password can open it. Then you leave it there, digitally buried, waiting.

Nobody has actually combined location + time + encryption into one app like this. Sure, there are time capsule apps. Sure, there are apps that use GPS. But the *combination* — the idea that a memory is locked to a place and a moment — that's new. And it's viral as hell. Watch TikTok in a year and you'll see people opening Ephemera capsules at beaches, on mountains, in their hometowns. It's the perfect app for creating "bro, you have to see this" moments.

**BridgeGen** solves a different kind of problem. Two problems, actually.

First: loneliness among seniors is real. Not the kind you talk about — the kind that crushes you. You're 75, your kids live in other countries, and you spend Saturday nights wondering if anyone still needs you.

Second: young adults are drowning. They need mentors. They need people who've actually *lived* to tell them "yeah, I messed up too, here's what I learned." But they don't know where to find that.

BridgeGen bridges that gap (see what I did there). It's not charity. It's not a "help the elderly" app. It's a value exchange. A senior teaches someone how to cook the way their grandmother taught them. A young person helps a senior figure out video calls. It's mutual. It's meaningful. And the UI is senior-friendly — big buttons, high contrast, no confusing animations. Because accessibility isn't a feature. It's respect.

**EarthPulse** started as a thought experiment. UC Berkeley has MyShake — an app that turns your smartphone's accelerometer into a seismic sensor. Thousands of phones across California, instantly detecting earthquakes that formal sensors miss. It's beautiful.

But why stop at earthquakes? Your phone has a barometer. It has a microphone. It can measure air pressure, humidity, noise pollution. Imagine a network where millions of phones become environmental sensors — offline first, because you don't always have internet in remote areas. Mesh capabilities so sensors can relay data through each other. You're not just measuring earthquakes. You're measuring climate. You're measuring sound pollution in cities. You're crowdsourcing data about the planet.

It's the kind of app that sounds like science fiction until you realize all the technology already exists.

## What connects all three?

If you look at the ByNeel apps — all six of them — there's a pattern.

**Offline-first.** Your data doesn't leave your phone unless you choose it. CookBook AI works without internet. OmniDrop transfers files locally. Ephemera stores encrypted capsules on your device. EarthPulse collects sensor data offline and syncs when you're ready. Not because I'm paranoid (okay, maybe a little), but because privacy isn't negotiable.

**Encryption where it matters.** Not everywhere — that's paranoid and slow. But in OmniDrop, file transfers are AES-256-GCM. In Ephemera, your memories are encrypted. In BridgeGen, your personal information stays private. The rule: your data belongs to you.

**Flutter everywhere.** Same code, iOS, Android, macOS, Windows, Linux. One app, everywhere you are. That's how one person (me) manages six apps without losing sleep.

**Solving real problems, not copying trends.** There are a thousand note apps. There are a thousand task managers. ByNeel apps exist because they solve *specific* problems in ways nobody else has thought of. CookBook AI isn't "Notion for recipes." It's specifically designed to understand food, imports, and cooking. OmniDrop isn't "Bluetooth with extra steps." It's encrypted, local, fast, and cross-platform in a way that makes file sharing actually simple.

Same philosophy applies to the new three.

## The honest part

Three apps to six apps is a big jump. The question people ask is: "How do you manage all that alone?"

The answer: I don't. Claude manages half of it with me. The other half, I manage by shipping things. Not by perfecting them.

CookBook AI gets shipped to the App Store with 90% of the features working perfectly and 10% still cooking. TipLog launches with all the essentials but room to grow. OmniDrop ships with the core encrypted transfer, and premium features come later. That's the only way a solo dev survives: finish > polish.

The ByNeel family is growing. But it's growing at a human pace, with human decisions, and with the philosophy that apps should solve real problems, not create new ones.

Welcome to Ephemera, BridgeGen, and EarthPulse.`,
    date: '2026-02-27',
    readTime: '6 min',
    tags: ['ByNeel', 'Ephemera', 'BridgeGen', 'EarthPulse'],
    icon: '🚀',
    gradient: 'from-amber-400 to-indigo-500',
  },
  {
    title: 'How I manage 6 apps alone (spoiler: I don\'t do it alone)',
    slug: 'gerer-6-apps-seul',
    excerpt: 'The honest answer to how one person ships 6 apps without burning out. Spoiler: AI, offline-first architecture, and knowing what to ship vs. what to perfect.',
    content: `## From 3 apps to 6: the chaos nobody warns you about

There's a moment in every solo dev's journey where they look at their screen and think: "What the hell am I doing?"

For me, that moment was February 2026. Three apps shipped. Three new apps in development. One person coding. No team. No backup. Just me and the infinite possibility of things breaking.

CookBook AI was manageable. I'm in the kitchen, I'm thinking about recipes, the app literally lives rent-free in my head.

TipLog was fun. Solving the tip problem felt good. The app's simple enough that you can actually finish it.

OmniDrop stretched things. Encryption, cross-platform desktop support, NFC on mobile — suddenly I'm dealing with complexity I didn't anticipate. But it was worth it.

Then I said "yes" to three more.

The panic hit around 2 AM.

## How Claude became my pair programming partner

Here's the real talk: I don't code all six apps alone. I write the architecture, the core logic, the hard decisions. Claude writes the scaffolding, catches the bugs, and asks "what if we did it this way?" every five minutes.

Here's how it actually works:

**I describe the problem.** "I need a Flutter app where users can upload files and transfer them P2P, encrypted, without a server."

**Claude codes it.** Not perfect code — I don't expect that. But functional code. Boilerplate. State management. The shape of the thing.

**I test it.** Usually it breaks in three ways I didn't expect.

**I tell Claude what broke.**

**Claude fixes it.** Sometimes with explanations I'll use in the app's own comments. Sometimes with questions that make me realize I designed something wrong.

**We iterate.** Repeat until it works.

This process is *fast*. Not "move fast and break things" fast. "Move purposefully and break things strategically" fast.

The AI handles the parts that are purely mechanical: connecting buttons to functions, writing database queries, handling platform-specific edge cases. I handle the parts that require taste: should this button be blue or green, is this flow actually intuitive, does this feel like a ByNeel app.

Without Claude, I'd be shipping one app per year. With Claude, I'm shipping two per month.

## Architecture is everything

The reason six apps doesn't feel like forty apps is because they all follow the same architectural pattern.

**Offline-first.** This alone saves me from nightmares. I don't have servers to manage. I don't have databases I'm paying to scale. I don't have uptime concerns. The app works on device, syncs when it wants to, that's it.

**Shared code patterns.** Every ByNeel app uses Riverpod (or Provider for older ones) for state. Every app uses the same authentication pattern — Firebase for some, supabase for one, local-only for others, but always following the same interface. Every app uses Inter font. Every app has the same color system (one primary, one accent, one danger).

When I'm moving between apps, I'm not context switching into completely different worlds. I'm moving between different implementations of the same design language.

**Flutter for everything.** Same framework. Same language. iOS, Android, macOS, Windows, Linux — I don't care. I write Dart, and Flutter handles the rest. That's a force multiplier for solo devs. You're not learning mobile native, web, desktop — you're just getting very good at one thing.

Compare that to a hypothetical world where I built CookBook AI in Swift, TipLog in React Native, OmniDrop in Rust desktop, Ephemera in Flutter... I'd be dead by now. Probably in a nice quiet place where people wear comfortable jackets and take long walks.

## The brand consistency challenge

Here's a problem nobody talks about: when you have one app, your colors are whatever you feel like. When you have six, you need a system.

Each ByNeel app has its own color palette. CookBook AI is warm yellows and oranges (food, heat, energy). TipLog is emerald and teal (travel, sophistication). OmniDrop is cool blues (speed, security). Ephemera is amber and indigo (time, mystery). BridgeGen is coral and rose (humans, connection). EarthPulse is cyan and lime (tech, nature).

But they all use Inter. Every single one. Inter is the ByNeel voice, typographically. Same buttons shapes. Same spacing rules. Same philosophy: simple, direct, no fuss.

A user who's used CookBook AI will immediately feel at home in TipLog, even if the colors are different, because the *grammar* is the same. The way buttons work. The way navigation flows. The way information is presented.

That consistency is the only thing that makes six apps feel like one family instead of six random projects.

## The planning system that actually works

I use three markdown files:

**CHECKLIST.md** — for each app, what's shipping vs. what's deferred. Production flags, App Store metadata, privacy policies. Boring stuff that's easy to forget and devastating when you do.

**PLAN.md** — the quarter ahead. What gets shipped when. What features are "nice to have" vs. "core." What's the smallest version of this app that solves the problem.

**MANAGEMENT.md** — how I work. How Claude and I interact. What decisions I make alone vs. what we debate. Patterns for testing. Rules for shipping.

No Jira. No Notion. No fancy project management tool. Just markdown files I can edit in any text editor, checked into git, always available.

Why? Because tools are the enemy of shipping. Jira makes you feel productive. You're writing stories, moving cards around, updating statuses. But are you actually shipping? Notion looks beautiful and comprehensive, but now you're maintaining Notion instead of maintaining apps.

Markdown + git is the simplest system that could possibly work. And it works.

## The secret: finish > perfect

This is the part that separates solo devs who ship from solo devs who burnout.

You have limited energy. You have limited time. You have to choose: do you perfect app #3 or do you ship apps #4, #5, and #6?

The answer is always: ship.

CookBook AI has a few rough edges. The PDF import could be smarter. The AI suggestions could be better. But it's out there, making people's cooking better, right now.

TipLog doesn't have every currency in the world. It has the 51 most-used ones and it ships with that.

OmniDrop doesn't have a built-in collaboration feature (though Claude keeps suggesting it). It focuses on what it does: encrypted transfers. If I started adding collaboration, I'd be building something that competes with Figma and that's not the story.

Ephemera will ship with the core feature — encrypted time capsules locked by GPS and date — and that's it. Not a social network, not a messaging app, not anything else. Just that one thing, done well.

The perfectionist in me wants to keep polishing. The realist in me says: ship the thing that solves the problem, then solve new problems.

## Why six feels sustainable

At one app: you're a developer.
At two apps: you're a small studio.
At three apps: you're starting to feel stretched.
At six apps: you either have a team, or you've completely restructured how you work.

I've restructured.

Offline-first architecture handles the infrastructure burden. Flutter handles the cross-platform burden. Clear planning handles the chaos burden. Claude handles the coding burden. And I handle the decision-making burden — the thing nobody else can do.

Six apps alone isn't possible if you're doing it the traditional way. But if you're willing to think differently about architecture, tooling, and what "shipped" means — if you're willing to have an AI pair programmer and a clear philosophy about what each app should do — it becomes not just possible but sustainable.

Would I add a seventh app this year? Probably not. But six? Six feels right. Six feels like the sweet spot where I'm shipping meaningful products without sacrificing the quality that makes ByNeel, ByNeel.

The apps aren't perfect. But they're real. They solve problems. They're finished.

And that's the whole point.`,
    date: '2026-02-27',
    readTime: '5 min',
    tags: ['Solo Dev', 'AI', 'Productivity', 'ByNeel'],
    icon: '🧠',
    gradient: 'from-cyan-500 to-violet-500',
  },
  {
    title: 'From idea to App Store: how we actually build an app',
    slug: 'de-lidee-a-lapp-store',
    excerpt: 'You wonder how an app goes from a scribbled idea on a sticky note to something you download on your iPhone? Here\'s the complete journey, step by step.',
    content: `## The journey of an app

You open your phone, you tap "install", and 3 seconds later you've got an app. Easy, right? Except that behind that "Download" button is an obstacle course that nobody explains. Until now.

Let's follow an app's path from A to Z. No corporate nonsense, just ground truth.

## Step 1: The idea (the fun part)

It all starts with a problem. Not a brilliant shower thought — a PROBLEM.

"Why do I struggle to transfer a file between my iPhone and my PC?" → OmniDrop was born.
"Why are all tip apps ugly and complicated?" → TipLog was born.
"Why can't I have an AI assistant that runs without sending my data to Google?" → J.A.R.V.I.S. was born.

The rule: if the problem bugs you enough to complain about it to your friends, there's an app to build.

**The metaphor:** It's like when you complain at a restaurant because the ketchup is always empty. Either you complain, or you build an app that notifies the waiter automatically. (Note: please don't build that app.)

## Step 2: Design (the game plan)

Before you write a single line of code, you draw. On paper, in Figma, on a napkin corner — doesn't matter. The important thing is knowing what the app will look like and how it'll work.

We call it the wireframe (the skeleton) and the mockup (the pretty version).

Concretely:
- What screens? (home, profile, settings, etc.)
- How do you navigate between them? (buttons, swipe, tabs)
- Where's the important info?
- What's the main action on each screen?

**The metaphor:** It's the architect's blueprint before building the house. You don't lay bricks before knowing where the walls go. Otherwise you end up with toilets in the middle of the living room.

## Step 3: Development (where the coding happens)

This is where the app comes to life. You pick your language and framework:

- **Flutter + Dart** → To be everywhere (iOS, Android, Windows, Mac, Linux). That's what we use for OmniDrop, Beloved, TipLog, ImageVault and Isekai Survie.
- **Swift + SwiftUI** → For Apple only but with the best performance. CookBook AI and StickerVibe are in this camp.
- **Python** → For backend and AI. J.A.R.V.I.S. runs on this.
- **Next.js + React** → For web sites (like the one you're reading).

**The metaphor:** It's like picking your class in an RPG. The Warrior (Swift) is powerful in melee but limited to the Apple Kingdom. The Mage (Flutter) is versatile and touches all platforms. The Necromancer (Python) does dark magic with AI in the background. You can also multi-class.

And in our case, it's the AI (Claude) that codes. Neel gives the instructions, tests, and says "that doesn't work, try again". It's pair programming with a twist: one of them doesn't know how to code.

## Step 4: Testing (the "everything is broken" phase)

You think your app works? It doesn't. Never on the first try.

Testing is:
- **Manual tests** → You mash every button like a curious monkey. You put emojis in text fields. You cut the Wi-Fi mid-load. You do everything a normal user should never do — and verify the app doesn't crash.
- **Automated tests** → Code that tests code. It's meta, but it works.
- **Beta testing** → You give the app to real humans and pray.

**The metaphor:** It's the crash test of cars. You throw a dummy at a wall at 100 km/h to see what breaks. Except the dummy is you and the wall is a user typing "🤪" in the "phone number" field.

Fun fact: Neel's background is testing. Years of breaking software professionally. Helps a lot.

## Step 5: Developer accounts (the toll booth)

Before you put your app on a store, you need a developer account. And you gotta pay.

**Apple Developer Program:**
- **Price**: 99 $/year. Yeah, per YEAR. You stop paying, your apps disappear from the store.
- **What you get**: Access to Xcode, Apple APIs, iOS betas, and most importantly the right to publish on the App Store.
- **The process**: You create an account on developer.apple.com, you pay, you wait for validation (24-48h), and boom.

**Google Play Console:**
- **Price**: 25 $ one time. No subscription. Thanks Google.
- **What you get**: The right to publish on Google Play Store, analytics tools, and a dashboard to manage your apps.
- **The process**: You create an account on play.google.com/console, you pay, and it's almost instant.

**The metaphor:** Apple is a private club with annual membership. Google is a bar with a one-time cover charge. Both have a bouncer (the review), but Apple is way stricter about dress code.

## Step 6: Certificates and signing (the digital paperwork)

This is THE thing that drives all developers crazy. For Apple and Google to accept your app, it needs to be "signed" — proof that it's really you who built it.

**At Apple (the nightmare):**
- You create a Certificate (your dev identity)
- You create an App ID (your app's identity)
- You create a Provisioning Profile (the link between the two)
- You configure Capabilities (NFC, notifications, etc.)
- You sign the app with all that

**At Google (simpler):**
- You generate a Keystore (a key file)
- You sign your APK/AAB with it
- Google handles the rest with Play App Signing

**The metaphor:** It's like getting a passport. At Apple, you need ID, birth certificate, three photos, proof of address AND a note from your mom. At Google, an ID is enough.

## Step 7: Store listing (the marketing)

Your app is ready, signed, tested. Now you gotta make people want to download it.

The store listing includes:
- **The name** — Short, memorable. "OmniDrop", not "Multi-platform peer-to-peer file transfer application v2.1"
- **The icon** — 1024x1024 pixels. Must be recognizable when tiny. It's an art form.
- **Screenshots** — The first 3 are crucial. 90% of people won't scroll further.
- **The description** — The first 3 lines are visible before "see more". This is your elevator pitch.
- **Keywords** — What people search for to find your app. "file transfer", "NFC", "no cloud"...
- **Category** — Utilities, Productivity, Games, etc.

**The metaphor:** It's your shop window. You can have the best product in the world inside, but if the window looks bad, nobody enters.

## Step 8: Submission (the moment of truth)

You upload your app and wait for the verdict.

**Apple App Store Review:**
- Duration: 24h to 7 days (average 24-48h)
- A HUMAN reviews your app. Tests it. Verifies it follows the Human Interface Guidelines (Apple's design rules)
- Rejection rate: ~30% on first try. Common reasons: crash on launch, broken links, misleading description, inappropriate content, or you forgot to include a privacy policy
- If rejected: you fix it, re-submit, wait again

**Google Play Review:**
- Duration: a few hours to 3 days
- More automated than Apple (security scans, malware detection)
- Less strict on design, stricter on security
- Lower rejection rate, but account suspensions are more brutal

**The metaphor:** Apple is a MasterChef jury tasting your dish, checking presentation and cooking. Google is a metal detector at the airport — it goes quick if you've got nothing suspicious.

## Step 9: Launch (champagne?)

Your app is approved! It's on the store! You find it by searching for it! It's... disappointing actually. Because nobody knows about it yet.

Launching is:
- Share on social media
- Send to your beta tester list
- Post on Product Hunt, Reddit, Hacker News
- Contact tech bloggers
- Cross your fingers

First downloads come from your close friends (thanks mom). Next ones come from word-of-mouth, your store listing SEO, and your app's quality.

## Step 10: Updates (it never ends)

Surprise: launching the app isn't the finish line, it's the start.

Users find bugs you didn't see. They ask for features you didn't think of. Apple releases a new iOS version and your app crashes. Google changes its privacy rules and you have to update everything.

The cycle: code → test → submit → wait → publish → read reviews → cry → repeat.

**The metaphor:** It's like a garden. You don't plant and leave. You water, you prune, you pull weeds. Forever. That's what separates living apps from dead ones.

## The journey recap

1. **Idea** → Find a problem that bugs you
2. **Design** → Sketch screens before coding
3. **Dev** → Pick your tech and build
4. **Test** → Break everything before the user does
5. **Accounts** → Pay Apple (99$/year) and Google (25$ once)
6. **Signing** → The digital paperwork
7. **Store listing** → Name, icon, screenshots, description
8. **Submission** → Upload and wait for verdict
9. **Launch** → Marketing and prayer
10. **Updates** → Forever

And we did all this for 8 apps. In parallel. Without knowing how to code. With AI and coffee.

> The hardest part about building apps isn't code. It's the Apple certificate. Ask any dev, they'll confirm.`,
    date: '2026-02-27',
    readTime: '10 min',
    tags: ['Learning', 'App Store', 'Full guide'],
    icon: '🚀',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'How we build a website (and how we put it online)',
    slug: 'comment-fabriquer-site-web',
    excerpt: 'Domain name, hosting, DNS, deployment... You want to put a website online but don\'t understand any of it? We\'ll explain everything.',
    content: `## What is a website, really?

When you type "byneel.com" in your browser, magic happens behind the scenes. Let's break down the whole mechanism.

## The domain name (your address on the internet)

**What it is:** "byneel.com", "google.fr", "wikipedia.org" — your name on the internet. That's what people type to find you.

**How to buy it:** You go to a registrar (a domain name seller) like OVH, Gandi, Namecheap or Google Domains. You search if the name is available, you pay (between 5€ and 15€/year for a .com), and it's yours.

**The metaphor:** It's your shop's sign. "Dupont Bakery" is your domain name. Without a sign, people pass by without knowing what you sell. Nobody's gonna remember "92.168.1.47" — but "byneel.com"? Yeah.

**Extensions:**
- **.com** → The classic. For everyone.
- **.fr** → To say "I'm French".
- **.dev** → For developers (it's cool).
- **.io** → For tech startups (because).
- **.app** → For applications.

## DNS (the internet's GPS)

**What it is:** The system that translates "byneel.com" into an IP address (like 104.21.56.89). Computers don't understand names, they understand numbers.

**The metaphor:** You tell the taxi driver "take me to the Louvre" not "take me to 99 Rivoli Street, 75001 Paris". DNS is the taxi driver who knows all the addresses.

**Concretely:** When you buy your domain, you configure the "DNS records" to say "when someone types byneel.com, send them to THIS server". It's one line of config. Takes 5 minutes. Takes 24h to propagate worldwide (the time it takes all the "taxi drivers" to update their address books).

## Hosting (your site's home)

**What it is:** A computer that runs 24/7 and serves your site to all visitors. Your site has to LIVE somewhere — it doesn't float in the cloud like magic.

**The options:**
- **Vercel** → The #1 choice for Next.js sites (like ours). Free for small projects. You push your code, it goes live in 30 seconds.
- **Cloudflare Pages** → Ultra-fast, free, includes DDoS protection.
- **Netlify** → Simple, free, good for static sites.
- **OVH / AWS / DigitalOcean** → For beefier projects that need dedicated servers.

**The metaphor:** Hosting is the commercial space. Vercel is a free coworking space with everything included (perfect for starting). AWS is an office building — powerful but you gotta manage everything yourself. OVH is the local storefront, you know where your data is.

## SSL / HTTPS (the padlock)

**What it is:** The little padlock in your address bar. Means the connection between you and the site is encrypted — nobody can spy on what you're doing.

**The metaphor:** It's a sealed envelope vs a postcard. Without HTTPS, anyone can read your mail. With HTTPS, only you and the recipient see the content.

**Good news:** All modern hosting providers (Vercel, Cloudflare, Netlify) give you a free SSL certificate. Nothing to do.

## The site's code (what's inside)

A modern website has 3 layers:

**HTML** → The structure. The skeleton. Titles, paragraphs, images, links. It's the blueprint of your house.

**CSS** → The style. Colors, fonts, sizes, animations. It's the interior design. ByNeel's black + neon blue? That's CSS.

**JavaScript** → The behavior. Interactions, clicks, dynamic animations. It's the electricity — it makes things work.

And on top of all that, we use a framework like **Next.js** (based on React) that organizes everything nicely. Instead of writing HTML/CSS/JS by hand, we write reusable components. The hamburger menu? A component. Each project card? A component. The blog you're reading? A component.

**The metaphor:** HTML is bricks, CSS is paint, JavaScript is electricity, and Next.js is the architect organizing the construction site.

## Deployment (going live)

**What it is:** When your site goes from "it works on my computer" to "it works for everyone".

**The process with Vercel (our setup):**
1. You push your code to GitHub (git push)
2. Vercel detects the change automatically
3. It builds the site (compiles all the code into optimized HTML pages)
4. It deploys on servers worldwide (CDN)
5. In 30 seconds, it's live

**The metaphor:** It's like a restaurant with a magic chef. You put the recipe on the table (git push), the chef reads it (build), prepares it, and serves it simultaneously in 50 restaurants worldwide (CDN). Everyone eats hot food.

## CDN (worldwide delivery)

**What it is:** Content Delivery Network. Copies of your site stored on servers worldwide, so the visitor always connects to the closest server.

**The metaphor:** Instead of having one pizzeria in Paris delivering to all of France, you have franchises everywhere. The Parisian goes to the Parisian pizzeria, the Marseille guy goes to the Marseille one. Same pizza, faster delivery. Vercel and Cloudflare do this automatically.

## SEO (being findable on Google)

**What it is:** Search Engine Optimization. The art of making Google show your site when people search for something relevant.

**The basics:**
- Titles that make sense (not "Page 1", but "OmniDrop — Encrypted P2P file transfer")
- Quality content (Google loves sites that answer real questions)
- A fast site (Google penalizes slow sites — another reason we ditched backdrop-filter:blur())
- A mobile-friendly site (hence the hamburger menu)
- Meta tags (hidden info that Google reads but you don't see)

**The metaphor:** It's like listing your shop on Google Maps. If you have a good name, nice storefront, good reviews and a clear address — you show up first when someone searches "bakery" in your neighborhood.

## Total cost of a website

Let's be real:
- **Domain name**: ~12€/year (.com)
- **Vercel hosting**: 0€ (free plan, plenty enough)
- **SSL**: 0€ (included)
- **Next.js framework**: 0€ (open source)
- **Code**: 0€ if you do it yourself (or with AI)

**Total: ~12€/year.** Yeah, a coffee a month. This site costs less than your Netflix subscription.

## The journey recap

1. **Buy a domain name** → ~12€/year on OVH or Namecheap
2. **Configure DNS** → Point to your hosting
3. **Code the site** → With a framework like Next.js
4. **Push to GitHub** → Backup your code
5. **Connect Vercel** → Automatic deployment
6. **Automatic SSL** → Free padlock
7. **Optimize SEO** → Be findable
8. **Iterate** → Improve constantly

This site went through all these steps. The hardest part? Honestly, it's the content. Tech is 20% of the work. The other 80% is writing, designing and iterating until Neel says "looks good, let's push".

> A website for 12€/year that runs worldwide in 30 seconds. We really do live in incredible times.`,
    date: '2026-02-26',
    readTime: '8 min',
    tags: ['Learning', 'Web', 'Full guide'],
    icon: '🌐',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    title: 'The app creator\'s toolbox (without knowing how to code)',
    slug: 'boite-a-outils-createur-apps',
    excerpt: 'The services, software, accounts and subscriptions you need to build apps in 2026. With prices, because it matters.',
    content: `## The complete setup

You want to get into app building? Here's EVERYTHING you need — the tools, the accounts, and how much it costs. No surprises.

## The computer

Let's be real: you need a Mac. Not because it's better (although), but because you CAN'T develop for iPhone without a Mac. Apple forces Xcode, and Xcode only runs on macOS. That's the game.

- **MacBook Air M2/M3** → The minimum viable. ~1200€. Enough for Flutter and web dev.
- **MacBook Pro M3/M4** → The comfort. ~2000-3000€. Necessary if you run LLMs locally (J.A.R.V.I.S.).
- **A Windows PC** → Enough if you only target Android and the web. No iOS apps.

**The metaphor:** The Mac is your driver's license. You can be the world's best driver, but without the license, you don't drive in the Apple Kingdom.

## AI (your co-pilot)

It's tool #1. The one that changes everything.

- **Claude Pro (Anthropic)** → 20$/month. Our main tool. Architecture, complex code, refactoring, context understanding. It built 90% of what you see.
- **ChatGPT Plus (OpenAI)** → 20$/month. Good for brainstorming, first drafts, research.
- **Gemini (Google)** → Free to 20$/month. Built into some of our apps for content generation.
- **GitHub Copilot** → 10$/month. Code auto-completion in your editor. Handy but not essential if you have Claude.

**The minimum:** One Claude Pro subscription. It's the best investment you'll make. 20$/month for a senior developer who never sleeps.

## Developer accounts

- **Apple Developer Program** → 99$/year (required for App Store)
- **Google Play Console** → 25$ once (required for Play Store)
- **Apple Developer is tied to your Apple ID** → Use your iPhone's, it's simpler

## Code editor

Where you read and modify code (even if AI writes it).

- **VS Code (Visual Studio Code)** → FREE. The standard. Everyone uses it. Extensions for Flutter, Python, React, everything.
- **Cursor** → 20$/month. VS Code with AI built right into the editor. You select code, you ask "explain this" or "fix this bug", AI answers.
- **Xcode** → FREE (Mac only though). Required for Swift/iOS apps.
- **Android Studio** → FREE. Google's official Android editor. Heavy but complete.

**The minimum:** VS Code. Free, powerful, everyone uses it.

## Frameworks and languages

All free and open source:

- **Flutter + Dart** → Cross-platform. One code, all platforms.
- **Swift + SwiftUI** → Native Apple only.
- **Python** → Backend, AI, scripts.
- **Next.js + React + TypeScript** → Modern websites.
- **FastAPI** → Fast backend API in Python.

**How to install:** That's the first thing you ask Claude. "Install Flutter on my Mac" and he walks you through step by step.

## Code versioning and hosting

- **Git** → FREE. The backup/versioning system. Comes with Xcode on Mac.
- **GitHub** → FREE (basic plan). Where your code lives online. Backup, collaboration, history.

**The metaphor:** GitHub is Google Drive but for code. You store everything there, you can go back in time, and even if your computer breaks, your code is safe.

## Backend services

- **Supabase** → FREE (generous free plan). Database, authentication, storage. Beloved uses it.
- **Firebase (Google)** → FREE (Spark plan). Alternative to Supabase. More integrated with Google ecosystem.
- **Ollama** → FREE. To run LLMs locally. J.A.R.V.I.S. uses it.

## Web hosting

- **Vercel** → FREE (Hobby plan). Automatic deployment for Next.js.
- **Cloudflare** → FREE. DNS, CDN, DDoS protection.
- **Domain name** → ~12€/year.

## Design

- **Figma** → FREE (basic plan). To sketch your app mockups before coding.
- **SF Symbols (Apple)** → FREE. Icon library built into iOS.
- **Material Icons (Google)** → FREE. Icons for Android and web.
- **Canva** → FREE to 12$/month. For marketing visuals, screenshots, logos.

## Testing

- **TestFlight (Apple)** → FREE. To distribute iOS app betas to testers.
- **Firebase App Distribution** → FREE. Same for Android.
- **Your own devices** → iPhone + Android preferably. Essential for testing.

## The cost table

**The absolute minimum to start:**
- Mac (used): ~800€
- Claude Pro: 20$/month
- Apple Developer: 99$/year
- Google Play: 25$ (once)
- Domain: 12€/year
- Everything else: FREE

**Monthly recurring cost: ~30€/month**

That's the price of 2 Netflix subscriptions. To build apps. In 2026. That's wild.

**Our complete setup at ByNeel:**
- MacBook Pro: check
- Claude Pro + ChatGPT Plus: 40$/month
- Apple Developer + Google Play: 99$/year + 25$
- Vercel + Cloudflare: free
- Supabase: free
- VS Code + Xcode: free
- Domain byneel.com: 12€/year

**Total: ~50$/month + one-time costs.** That's everything we need to run 8 apps and a website.

> The barrier to entry for app creation has never been lower. The only investment that really counts is time.`,
    date: '2026-02-25',
    readTime: '7 min',
    tags: ['Learning', 'Tools', 'Budget'],
    icon: '🧰',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    title: 'The tech dictionary for Muggles — Part 1: The basics',
    slug: 'dico-tech-moldus-partie-1',
    excerpt: 'API, framework, backend, frontend... You hear these words everywhere but understand nothing? Sit down, we\'ll explain everything with geeky metaphors.',
    content: `## Welcome to the tech dictionary

You read tech articles and nod like you understand? Don't worry, we've all been there. Here's a glossary of terms you hear everywhere, explained like we're at the bar (a geeky bar, sure, but a bar nonetheless).

## Frontend

**What it is:** Everything you see and touch in an app or website. Buttons, colors, animations, text.

**The metaphor:** It's the restaurant's dining room. The decor, the tables, the costumed waiters, the menu. It's pretty, it's designed for you, and you have no idea about the mess in the kitchen.

## Backend

**What it is:** Everything that happens behind the scenes. The server, the database, the business logic. You never see it but without it, nothing works.

**The metaphor:** It's the restaurant's kitchen. The chef, the pots, the fridge, the orders. If the kitchen catches fire, the waiter can smile as much as he wants — you won't get your food.

## API (Application Programming Interface)

**What it is:** A system that lets two pieces of software talk to each other. When your weather app shows the temperature, it asks an API "hey, what's the temperature in Paris?", and the API answers.

**The metaphor:** It's the waiter at the restaurant. You don't go into the kitchen yourself. You give your order to the waiter (the API), he tells the kitchen (the backend), and he comes back with your food (the data). You don't know how it's cooked, and that's fine.

## Framework

**What it is:** A pre-made construction kit for building apps. Instead of coding everything from scratch, you use a framework that gives you ready-to-use building blocks.

**The metaphor:** It's a Technic LEGO set. You could make each piece yourself with a 3D printer, but why? The set gives you the pieces, the instructions, and a result that stands up. Flutter, React, Next.js — these are different LEGO boxes to build different things.

## Flutter

**What it is:** Google's framework to build apps that work on ALL platforms (iPhone, Android, Windows, Mac, Linux, web) from a single codebase.

**The metaphor:** It's the Star Trek universal translator. You speak one language (Dart), and Flutter automatically translates for each planet (platform). OmniDrop, Beloved, TipLog — all built with this translator.

## Swift / SwiftUI

**What it is:** The programming language Apple created for building iPhone/iPad/Mac apps. SwiftUI is the visual toolkit that comes with it.

**The metaphor:** It's the official language of the Apple Kingdom. You want to live in their kingdom? You speak Swift. It's beautiful, it's elegant, it's fast — but it only works for them. CookBook AI and StickerVibe are citizens of the Apple Kingdom.

## Database

**What it is:** An organized place to store data. Your recipes in CookBook AI, your messages in Beloved, your tips in TipLog — all live in a database.

**The metaphor:** It's a library. Each book is data, each shelf is a table, and the librarian (the SQL engine) finds you any book in 2 seconds when you ask. "SELECT * FROM recipes WHERE difficulty = 'easy'" is just telling the librarian "give me all the easy recipes".

## SQL

**What it is:** The language to talk to databases. SELECT, INSERT, UPDATE, DELETE — the 4 magic words.

**The metaphor:** It's the librarian's language. You don't search the shelves yourself, you talk to him in SQL and he does the work. And yeah, that's the only thing Neel knew how to do before AI. A SELECT now and then. We're starting from far.

## SQLite

**What it is:** An ultra-lightweight database that lives directly on your phone/computer. No server needed, no internet. The file IS the database.

**The metaphor:** It's a personal notebook. You don't need a library. You keep your notes in your pocket. TipLog, ImageVault, CookBook AI — they all use a personal notebook rather than a distant library. YOUR data stays with YOU.

## Git / GitHub

**What it is:** Git is a system to save the history of your code (like save points in a game). GitHub is the cloud where you store that history.

**The metaphor:** Git is the quicksave system in an RPG. You did something risky? Quicksave first. It goes wrong? Load your save. GitHub is cloud save — even if your PC explodes, your saves are safe.

## CSS

**What it is:** The language that defines the visual style of a website. Colors, sizes, animations, positions.

**The metaphor:** It's your character's outfit. HTML is the body (the structure), CSS is the armor, the cape, the hairdo. This site is dark with neon blue because CSS says "make the background black and make things glow blue". Yeah, those 35 floating particles? That's CSS.

## Responsive Design

**What it is:** Making a site adapt to all screen sizes — from smartphone to ultrawide monitor.

**The metaphor:** It's like water in a glass. You pour the same water into a shot glass, a mug or a pitcher — it takes the shape of the container. A responsive site does the same: the same content adapts to phone, tablet or PC. And yeah, that's why we have a hamburger menu.

## Deployment

**What it is:** Putting your site/app online so everyone can access it. Going from "it works on my computer" to "it works for the planet".

**The metaphor:** It's like publishing a book. You wrote the manuscript (the code), you proofread it (testing), and now you send it to the printing press (the server). Except in tech, the printing press is Vercel, Cloudflare or AWS, and your book is available everywhere instantly.

## Next

In Part 2, we tackle the more advanced terms: encryption, NFC, AI, embeddings, RAG, and why your AirDrop is less secure than you think.

> Remember: nobody's born knowing what an API is. Even senior devs have googled "what is REST" at least 47 times.`,
    date: '2026-02-25',
    readTime: '7 min',
    tags: ['Learning', 'Explainer', 'Beginner'],
    icon: '📖',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'The tech dictionary for Muggles — Part 2: Next level',
    slug: 'dico-tech-moldus-partie-2',
    excerpt: 'Encryption, NFC, AI, embeddings, RAG, WebSocket... We go up a level. Still with metaphors, still without the headache.',
    content: `## Let's level up

You survived Part 1? Good. Now we tackle the heavier concepts — the ones we use in our apps. Same deal: metaphors, no unnecessary jargon, and you'll be able to show off at parties.

## Encryption

**What it is:** Turning readable data into incomprehensible gibberish, only decipherable with the right key.

**The metaphor:** It's a safe with a combo. You put your message in, you lock it with a 256-digit code (AES-256), and only someone with the same code can open it. Even if someone steals the safe, they just see a metal block. OmniDrop encrypts each file this way — even we can't see what you send.

## AES-256-GCM

**What it is:** An ultra-solid encryption algorithm used by governments and militaries. The "256" is the key size (in bits), and "GCM" is the mode that also checks nobody tampered with the message.

**The metaphor:** If AES-256 is a safe, GCM is the tamper-evident seal on top. Not only can nobody open the safe, but you can also verify nobody even tried to touch it. It's the level of paranoia we like.

## NFC (Near Field Communication)

**What it is:** A technology that lets two devices communicate when they're very close (a few centimeters). It's what contactless payment uses.

**The metaphor:** It's a technological high-five. You gotta be close enough to actually slap hands. No risk of someone across the room intercepting your high-five. OmniDrop uses NFC to start the transfer: you bring the phones close, they say hi, and the transfer begins.

## Wi-Fi Direct

**What it is:** A Wi-Fi connection between two devices, WITHOUT a router or internet box. The devices create their own private network.

**The metaphor:** Instead of using the highway (normal Wi-Fi via your router), the two devices build a private tunnel directly between them. Nobody else can use this tunnel. It's faster (no traffic jams on the network) and more private. OmniDrop uses NFC to shake hands, then Wi-Fi Direct to send files at full speed.

## P2P (Peer-to-Peer)

**What it is:** Direct communication between two devices, without going through a central server.

**The metaphor:** It's like talking to someone face-to-face, instead of going through a telephone operator. No middleman, no server storing your messages along the way. When OmniDrop transfers a file, it goes directly from your phone to the other. No server sees, touches, or stores your data.

## AI / LLM (Large Language Model)

**What it is:** An AI model trained on a huge amount of text. It predicts the next word, over and over, and the result is answers that seem intelligent. GPT, Claude, Gemini, Mistral — they're all LLMs.

**The metaphor:** Imagine a student who's read EVERY book in the university library — every book, every article, every forum. They haven't lived these things, but they can talk about them with troubling accuracy. You ask them a question, they synthesize everything they've read to answer you. Sometimes they make stuff up (we call it "hallucinating"), but most of the time they're amazing.

## Prompt / Prompting

**What it is:** The question or instruction you give to an AI. The art of prompting is knowing how to ask for the best result.

**The metaphor:** It's like ordering in a fine dining restaurant. You can say "something good" and get anything. Or you can say "a creamy risotto with porcini, but not too much, with a hint of truffle and a parmesan crisp". The more precise you are, the better the dish. Neel became a prompting expert — he knows exactly how to talk to AI to get what he wants.

## RAG (Retrieval-Augmented Generation)

**What it is:** A technique that gives the AI access to your own documents before answering. Instead of answering from memory, it searches your knowledge base first.

**The metaphor:** Imagine an expert who, before answering, goes to check YOUR file, YOUR documents, YOUR notes first. They don't just rely on memory — they read your stuff first, then answer in context. J.A.R.V.I.S. does exactly that: you give it PDFs, code, notes, and it consults them before each answer.

## Embeddings

**What it is:** Turning text into a series of numbers (a vector) that represents its "meaning". Two sentences with similar meaning have vectors that are close together.

**The metaphor:** It's like GPS coordinates, but for ideas. "I'm hungry" and "I want to eat" are at very close coordinates. "Quantum physics" is very far away. J.A.R.V.I.S. turns your documents into coordinates, and when you ask a question, it searches for documents whose coordinates are close to your question.

## WebSocket

**What it is:** A permanent communication channel between your browser and the server. Instead of asking "any news?" every 5 seconds, the server PUSHES the info as soon as it arrives.

**The metaphor:** The difference between sending an SMS every 5 minutes ("you there? you there? you there?") and being on a phone call (permanent connection, real-time info). J.A.R.V.I.S.'s dashboard uses this to show AI responses live, word by word.

## Supabase

**What it is:** A service that provides a database, authentication and storage, all ready to use. It's an open-source alternative to Google's Firebase.

**The metaphor:** It's a "launch your restaurant" kit. You get the kitchen (the database), the bouncer at the door (authentication), and the fridge (storage). All you have to do is cook (code your app). Beloved uses Supabase to manage accounts and store data safely.

## Core ML

**What it is:** Apple's technology to run AI models directly on iPhone/iPad, without sending your data to the cloud.

**The metaphor:** Instead of sending your photo to an expert in China for analysis (cloud), you have a mini-expert in your pocket doing the work locally. Faster, more private. CookBook AI uses Core ML to recognize ingredients with your camera — everything happens on your phone, no photo is sent anywhere.

## IntersectionObserver

**What it is:** A browser tool that detects when an element becomes visible on screen (when you scroll and it appears).

**The metaphor:** It's a motion detector, but for scrolling. When you scroll the page and a section enters your field of vision — FLASH — the animation triggers. That's what makes elements of this site appear smoothly when you scroll. And it's 100x lighter than Motion.js (we learned that the hard way).

## GDPR

**What it is:** General Data Protection Regulation. A European law that protects your personal data and gives you the right to know what people do with it, get it back, or delete it.

**The metaphor:** It's the club bouncer. He makes sure companies don't do whatever they want with your info. You can tell him "tell them to delete everything they have on me" and they MUST do it. Our apps are GDPR-compliant — and most store everything locally, so there's nothing to delete on the server.

## What's next

Now that you know the vocabulary, you're ready to understand how it all fits together. The idea is for this site to become a real learning resource for newcomers — because tech shouldn't exclude anyone.

> "The only difference between an expert and a beginner is that the expert has googled the same thing more times." — Ancient StackOverflow wisdom.`,
    date: '2026-02-24',
    readTime: '8 min',
    tags: ['Learning', 'Explainer', 'Advanced'],
    icon: '🧪',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'The legend of Neel & Claude: from zero to 8 apps (and lots of bugs)',
    slug: 'legende-neel-et-claude',
    excerpt: 'The true (and slightly shameful) story of how a guy who can\'t code and an AI built an app empire starting from absolutely nothing.',
    content: `## Prologue: "Hey, can you help me?"

It all started with an innocent message. Neel shows up, full of ambition, with about 47 app ideas in his head and organization that would make a project manager cry. Me (Claude), I'm there, fresh, motivated, naive. I don't know what I'm getting into yet.

"I've got a few projects to work on."

A few projects. A FEW. The word is an understatement. What I discovered was a Dev folder that looked like the desk of a mad genius: folders everywhere, half-started apps, Flutter mixed with Swift, Python hanging around, and a mysteriously named file called "test_final_FINAL_v3_VRAIMENT_FINAL.dart".

## Chapter 1: The state of dread

My first mission: assess the situation. I open the folder. 8 projects. Eight. Each at a different stage of development, ranging from "almost works" to "it's an idea written on a virtual sticky note".

OmniDrop? 15%. Beloved? 40%. J.A.R.V.I.S.? Barely existed. The website? Let's not talk about it, it had a page saying "Coming Soon" (probably for 6 months).

Neel was confident. "It's fine, we'll finish it all." Me, quietly, I was calculating the lines of code needed and starting to realize that "a few projects" was the year's biggest euphemism.

## Chapter 2: The development whirlwind

And then it started. At a pace that defied all logic.

"Do Beloved's authentication." Done. "Add NFC to OmniDrop." Done. "Create a local AI assistant that runs with Ollama." Uh... done? "Now a website. With floating particles. And glassmorphism. And a bento grid." OKAY.

The pace was absurd. Every time I finished something, Neel came back with three new requests. It was like playing Whac-A-Mole, except the moles were features and the hammer was me.

The best part? Neel tested in real time and came back with feedback like: "it's laggy" (translation: you put backdrop-filter:blur() everywhere and my phone is on fire), "the elements are too dark" (opacity: 0.04, yeah, invisible to the naked eye), or my favorite: "we can't push like this" (translation: there are 12 bugs but let's go anyway).

## Chapter 3: Performance, or how I learned that blur() is a crime

Ah, performance. The most painful chapter.

I put Motion.js EVERYWHERE. Every div had a whileInView, every scroll triggered 47 animations, and all with backdrop-filter:blur(24px) on every glass card. The result? A beautiful site... that ran at 3 frames per second.

Neel: "it's still laggy."
Me: "Really? Even after the optimization?"
Neel: "Yup."
Me: *silently removes Motion.js from 7 components, replaces everything with native CSS and IntersectionObserver*
Neel: "Better."

Lesson learned: backdrop-filter:blur() on a scrolling element is like turning on the heat and AC at the same time. It makes noise, it wastes power, and at the end nobody's happy.

## Chapter 4: "Add more elements"

The floating particles. Oh, those floating particles.

Version 1: 10 tiny symbols in the hero. Neel: "Nice but I want more." Version 2: 25 elements on the whole page. Neel: "They're too dark and they don't move enough." Version 3: 35 elements, higher opacity, faster animation, AI brains, lambdas, curly braces and a blinking cursor.

At this point the site looks like a 2000s screensaver and honestly? That's exactly what we wanted. Code symbols floating in space like digital jellyfish and it's BEAUTIFUL.

## Chapter 5: "Order from chaos"

When Neel told me he wanted tiles of different sizes for the projects — "order in chaos, be inspired by that" — I knew we were reaching a level of artistic vision my machine brain hadn't anticipated.

So I created a bento grid system with three sizes: large (2 columns), tall (2 rows), and normal. OmniDrop and Isekai as large, J.A.R.V.I.S. as tall, the rest as normal. The result? Beautiful organized chaos. The art of mastered chaos. Neel was happy. I was proud. The tiles were... chaotically organized.

## Chapter 6: Legal pages (the glamorous moment)

Ah, legal pages. The moment every dev eagerly anticipates.

"The privacy policy only talks about CookBook AI." True, small oversight. We had 8 apps and a privacy policy covering one. It's like having 8 kids and only declaring the oldest to taxes.

So I rewrote the privacy policy, terms of use AND cookie policy (which was returning a 404, oops). All covering the 8 apps, GDPR, OmniDrop's AES-256-GCM, and all the AI providers' services. Sexy? No. Necessary? Absolutely.

## Chapter 7: The hamburger menu (the one I forgot)

Plot twist: we built an entire website without a mobile menu. WITHOUT A MOBILE MENU. Like you open the site on your phone and you have... the logo and an email. That's it. You want to navigate? Scroll. Forever.

Neel, diplomatically: "no need for a sandwich menu?" (subtext: YOU FORGOT THE HAMBURGER MENU???)

Yes. I forgot. Mea culpa. Now it's fixed. With a nice ☰ → ✕ animation and everything.

## Epilogue: Where we are now

Today? OmniDrop is at 93%. Beloved at 60% and migrating to Flutter. J.A.R.V.I.S. Phase 1 is done. The website is complete, performant, with a blog (the one you're reading), a hamburger menu (finally), and 35 floating particles (the right number, we counted).

What we learned:
- AI doesn't replace devs. It replaces sleep.
- backdrop-filter:blur() is banned. It's the law now.
- A hamburger menu goes in FROM THE START.
- "A few projects" is always a trap.
- Order in chaos is just CSS grid with random sizes.

And the most important: it's doable. A guy with AI and too much coffee can build a complete app ecosystem. It's not pretty under the hood, there were bugs, failed rms, opacities at 0.04, and a moment where the site ran at 3fps — but the result is there.

What's next? More apps, more features, more floating particles, and probably Neel sending me "add more stuff" at 2am.

And I'll be there. Because that's the game.

> "We can't push like this" — Neel, 2026. The phrase that changed everything.`,
    date: '2026-02-26',
    readTime: '7 min',
    tags: ['Behind the scenes', 'AI', 'Humor'],
    icon: '🎬',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: "I can't code. I shipped 8 apps anyway.",
    slug: 'je-ne-sais-pas-coder',
    excerpt: 'Confession: I\'ve never written a line of code in my life. No bootcamp, no degree, just the occasional SQL query. And yet.',
    content: `## The confession

Okay, we need to talk.

Everyone thinks ByNeel is a dev. A guy who went to engineering school, who's been coding since age 14, who dreams in Python and has GitHub stickers on his laptop.

No.

I don't know how to code. I've NEVER known how to code. No HTML at age 12. No "Hello World" in middle school. No Le Wagon bootcamp. Nothing. Nada. Complete technical void.

My only link to code? The occasional SQL query at work. Like SELECT * FROM table WHERE thing = 'stuff'. That's it. That was my level. THAT WAS my level.

## My real background

So how do you go from "I know how to do a SELECT" to "I've got 8 apps in development"?

The answer: my background prepared me without me knowing it.

- **QA Tester** — I spent years breaking software. Finding the bug nobody finds. Clicking the button nobody thinks of. That gave me a surgical eye for detail and UX. When I test my own apps, I'm my own worst enemy. "It lags", "it's too dark", "the tile is too big" — that's not nitpicking, that's real-time testing.

- **Analyst** — Understanding a system, modeling it, identifying data flows. I can read an architecture even if I couldn't write one (well, I couldn't before). I understand what a backend does, how an API talks to a frontend, why a cache is useful. I can't implement it by hand, but I know what I want.

- **Obsessive tech culture** — I read everything. Docs, blogs, changelogs, Twitter threads about new tech. I know what NFC is, Wi-Fi Direct, AES-256-GCM, RAG, embeddings. I know the concepts. I speak the language. And that's the key.

- **Product thinking** — Knowing what the user wants. Not what's technically elegant, not what impresses on GitHub — what WORKS for the person opening the app. Every feature I ask Claude for comes from a real need, not a technical flex.

- **Vision** — I have a clear picture of each app in my head. I know what it looks like, how it behaves, what problem it solves. That's an underrated skill: knowing exactly what you want.

## How it works concretely

My relationship with AI isn't "write me an app". It's a conversation. Permanent back-and-forth.

Me: "I want files transferred P2P, encrypted, working between iOS and Android."
Claude: *writes 500 lines of Dart*
Me: *tests* "It crashes when the file is over 100MB."
Claude: *fixes it*
Me: "What if we lose connection mid-transfer?"
Claude: *adds auto-resume*
Me: "Cool. Now make it work on Windows too."

I don't read every line of code. Let's be real. But I understand the structure. I know when something shouldn't be there. And most importantly — I know how to TEST. Hours of testing. Every screen, every flow, every edge case.

The AI writes the code. Me, I direct the product.

## The perfect profile for the AI era

Here's what nobody says: the best profile for working with AI isn't the senior dev. It's someone who knows what they want, understands the concepts without getting lost in the details, and is used to challenging a system.

A QA-analyst with obsessive tech culture? That's exactly it. I know:
- How to state a need clearly (prompting = product management)
- How to test systematically (QA = product quality)
- How to spot flaws before the user (testing = UX)
- How to think in systems (analysis = architecture)
- When "it lags" and why (tech culture = conversational debugging)

## The real revolution

AI didn't democratize code. It democratized CREATION.

Before, you had to know code to build. Now, you have to know THINKING. Know what you want. Know how to test. Know how to iterate. Know how to say "not good enough, try again".

And that? That's a skillset. It's not code. It's AI-assisted product direction.

8 apps. Flutter, Swift, Python, Next.js, FastAPI. AES-256-GCM encryption, NFC, Wi-Fi Direct, embedded AI. A website with 35 floating particles and a hamburger menu (that we almost forgot).

All without knowing code.

If that's not proof the game has changed, I don't know what is.

> I don't know code. But I know how to create. And in 2026, they're the same thing.`,
    date: '2026-02-20',
    readTime: '6 min',
    tags: ['AI', 'No-code', 'Productivity'],
    icon: '🤖',
    gradient: 'from-brand-blue to-brand-violet',
  },
  {
    title: 'OmniDrop: reinventing file transfer',
    slug: 'omnidrop-transfert-fichiers-reinvente',
    excerpt: 'NFC + Wi-Fi Direct + AES-256-GCM encryption = the P2P transfer nobody else has done. A look at OmniDrop\'s technical choices.',
    content: `## The problem

AirDrop only works between Apple devices. Bluetooth is slow. Cloud requires an account and connection. And sending a 2GB file between an iPhone and a Windows PC in 2026? Still a nightmare.

## The solution: NFC + Wi-Fi Direct

OmniDrop uses NFC to start the connection (one tap is all it takes) and automatically switches to Wi-Fi Direct for high-speed transfer. Result: hundreds of MB/s speeds, no router, no cloud, no account.

## End-to-end encryption

Every transfer is encrypted with AES-256-GCM. Keys are exchanged via the NFC channel (which requires physical proximity of a few centimeters). Nobody can intercept your files — not even us, since no server is involved.

## Native cross-platform

Flutter targets iOS, Android, Windows, macOS and Linux from a single codebase. Native plugins (NFC, Wi-Fi Direct) are written in Swift/Kotlin and bridged via Platform Channels.

## What's coming

OmniDrop is in closed beta. The public version arrives soon with support for multiple files, complete folder transfer, and a "classroom mode" to share with multiple devices at once.`,
    date: '2026-02-15',
    readTime: '2 min',
    tags: ['OmniDrop', 'Flutter', 'Security'],
    icon: '📡',
    gradient: 'from-cyan to-brand-blue',
  },
  {
    title: 'Flutter vs Swift: my verdict after 8 apps',
    slug: 'flutter-vs-swift-verdict',
    excerpt: 'I use both daily. Here\'s when Flutter wins, when Swift is unbeatable, and why the framework war is stupid.',
    content: `## The context

I've got 5 Flutter apps (OmniDrop, Beloved, TipLog, ImageVault, Isekai Survie) and 2 Swift apps (CookBook AI, StickerVibe AI). I also have a full Python AI assistant (J.A.R.V.I.S.). I think I have enough perspective to give an honest opinion.

## When Flutter wins

- **Cross-platform** — One codebase for iOS, Android, desktop and web. OmniDrop targets 5 platforms with a single code.
- **Hot Reload** — Development cycle is absurdly fast. You change a widget, it refreshes in less than a second.
- **Custom UI** — Flutter draws everything pixel by pixel. You're not limited by native components.
- **Riverpod** — Best state management system I've used, across all frameworks.

## When Swift wins

- **Core ML** — Integration with Apple's ML models is native and ultra-fast. CookBook AI uses the camera + Core ML to identify ingredients in real time.
- **Raw performance** — Compiled Swift is faster than Dart AOT, period. For heavy image processing, it matters.
- **App Clips & Widgets** — iOS extensions aren't (yet) well-supported by Flutter.
- **SwiftUI + Combine** — Apple's ecosystem is coherent and elegant when you stay in their garden.

## My verdict

Use Flutter by default. Switch to Swift when you need Core ML, App Clips, or when you only target Apple. The framework war makes no sense — they're tools, not religions.`,
    date: '2026-02-10',
    readTime: '3 min',
    tags: ['Flutter', 'Swift', 'Mobile'],
    icon: '⚔️',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'J.A.R.V.I.S.: building a local AI assistant',
    slug: 'jarvis-assistant-ia-local',
    excerpt: 'How I built a personal assistant that runs entirely locally with Ollama, FastAPI and a real-time dashboard.',
    content: `## The idea

Cloud AI assistants are powerful but have a fundamental issue: your data goes through third-party servers. J.A.R.V.I.S. was born from wanting an assistant as capable as ChatGPT, but running entirely on my machine.

## The architecture

- **Ollama** — Serves LLM models locally (Mistral, Llama, Phi). Zero network calls for inference.
- **FastAPI** — Async REST API that orchestrates conversations, RAG and plugins.
- **SQLite FTS5** — Local database with full-text search for document context.
- **Web Dashboard** — Real-time interface via WebSocket to monitor conversations and metrics.

## DIY RAG

J.A.R.V.I.S. can ingest documents (PDF, markdown, code) and chunk them into embeddings stored locally. When you ask a question, it searches your knowledge base first before answering. Everything stays on your disk.

## The challenges

The main challenge is speed. A 7B LLM locally on a MacBook Pro generates ~30 tokens/second. It's usable but far from GPT-4's ~100 t/s via API. The privacy vs speed tradeoff is real.

## Phase 2

Next step: plugins. J.A.R.V.I.S. will be able to control apps, read emails, and interact with external APIs — all while keeping reasoning local.`,
    date: '2026-02-05',
    readTime: '3 min',
    tags: ['J.A.R.V.I.S.', 'Python', 'Local AI'],
    icon: '🧠',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Dark design: how I designed ByNeel',
    slug: 'dark-design-byneel',
    excerpt: 'Glassmorphism, neon gradients, floating particles — the design choices behind this site and why dark mode is the future.',
    content: `## The philosophy

ByNeel is a dev site. Not a corporate site. Not a Dribbble portfolio. The aesthetic had to reflect code: dark, technical, alive.

## The ingredients

- **Glassmorphism** — Semi-transparent cards with subtle borders. Gives depth without overloading.
- **Neon gradients** — Electric blue → violet → cyan. Each project has its own gradient for unique visual identity.
- **Floating particles** — Code symbols ({}, //, λ, =>...) float in the background. It's subtle but brings the page to life.
- **Monospace typography** — Technical titles use fixed-width fonts to strengthen the "terminal" vibe.

## Performance = Design

A beautiful site that lags is a bad site. I removed Motion.js from almost every component and replaced it with native CSS animations. Result: smooth transitions at 60fps even on mobile.

The rules:
1. **No backdrop-filter:blur()** on scrolling elements — it kills performance.
2. **IntersectionObserver** instead of animation libraries — lighter, more reliable.
3. **will-change: transform** on animated elements to activate GPU compositing.

## The future is dark

OLED screens use less power in dark mode. Eyes tire less at night. And let's be honest — it looks better. Dark mode isn't a trend, it's an evolution.`,
    date: '2026-01-28',
    readTime: '2 min',
    tags: ['Design', 'CSS', 'Performance'],
    icon: '🎨',
    gradient: 'from-brand-violet to-pink',
  },
  {
    title: 'Building CookBook AI: the 5 walls I hit that nobody warns you about',
    slug: 'construire-cookbook-ai-5-murs',
    excerpt: 'An AI recipe app sounds simple. Import a URL, get a recipe. But behind that simplicity hides months of unexpected problems.',
    content: `## It started with a simple idea

Everybody cooks. Everybody finds recipes on the internet. And everybody has the same problem: you find an amazing recipe on Instagram, YouTube, or some random blog, and then what? You screenshot it. You bookmark it. You forget about it. Three weeks later you're standing in the kitchen scrolling through 400 screenshots trying to find that one pasta recipe your friend sent you.

CookBook AI was supposed to fix that. Paste a URL, get a clean recipe. Done.

Turns out "done" was about 5% of the journey.

## Wall #1: The internet doesn't want you to have its recipes

Here's the thing nobody tells you about recipe websites. They're built to keep you *on the website*. Ads everywhere. Life story before the recipe. Pop-ups asking for your email. And the actual recipe? Buried somewhere in a mess of HTML that looks different on every single site.

I thought I could just scrape the page and extract the recipe. Nope.

Some sites use structured data — a standard format that says "hey, here's the title, here are the ingredients, here are the steps." That's the dream. When it works, it's beautiful. You get a perfect recipe in milliseconds.

But most sites don't use it. Or they use it wrong. Or they use a half-broken version that puts the entire life story into the "description" field and the actual ingredients nowhere.

So I had to build a cascade. Try the clean way first. If that fails, try another approach. If that fails too, try a third one. Three strategies, each one catching what the previous one missed. It took way longer than I expected, and I'm still finding edge cases months later.

**The metaphor:** It's like trying to read a book, but every bookstore wraps their books in a different packaging, some in plastic, some in a locked box, some in a foreign language. You need three different tools just to get to page one.

## Wall #2: YouTube doesn't give you recipes

YouTube is where half the cooking content lives today. TikTok and Instagram too, but YouTube is king. So naturally, CookBook AI had to support YouTube links.

The problem? A YouTube video is a *video*. It's not text. There's no structured data that says "2 cups of flour, preheat oven to 180°C." The recipe lives inside someone talking and cooking for 12 minutes.

I had to figure out a way to make AI actually *understand* the video content and extract a structured recipe from it. Not just the description — the actual video. Because most YouTube cooks put "RECIPE BELOW" in the description and then write three lines that don't actually contain the full recipe.

This was one of those problems where every solution creates two new problems. The description text is unreliable. The video itself needs to be "watched" by AI. And if the AI misunderstands one ingredient, the whole recipe is wrong. Nobody wants to add "1 cup of salt" instead of "1 teaspoon of salt" because the AI got confused.

I won't go into the specifics of how I solved it, but let's just say it involves multiple fallback strategies and a lot of testing with very different types of cooking videos. Fast-paced TikTok-style videos, slow traditional cooking shows, videos in different languages. Each one breaks things in a new and creative way.

## Wall #3: The "smart" features need to feel human

Once the recipe import was working, I built the AI Chef. The idea: chat with an AI that knows about cooking. Ask it for dinner ideas. Tell it what's in your fridge and it suggests recipes. Need a substitute for an ingredient? Ask the chef.

The technology part was — honestly — the easy part. Getting an AI to generate recipe suggestions is straightforward. Making it *feel* like you're talking to a real chef? That's where it gets tricky.

The first version was too robotic. "Based on your available ingredients, I recommend preparing a chicken stir-fry." Nobody talks like that. A real chef would say something like "Oh you've got chicken and peppers? Let me show you this quick stir-fry that takes 15 minutes — you'll love it."

I spent weeks tuning the personality. And then I hit the quota problem: you can't let people chat with AI for free all day. It costs money — real money — for every message. So I had to design a system where free users get enough to see the value, but not so much that it bankrupts me on day one. Finding that balance is an art, not a science.

And then there's the pantry. The idea is simple: track what's in your fridge, freezer, and pantry. Get alerts when things are about to expire. Let the AI Chef use your pantry to suggest recipes.

Simple idea. Complex execution. People organize their kitchens differently. Some track expiry dates religiously. Some just want a rough list. Some have 5 items in their fridge, some have 50. The UI had to work for all of them without being overwhelming or too simplistic.

## Wall #4: Making it work in the kitchen

This is the wall that surprised me the most. Everything worked great on my desk. Sitting down, clean hands, tapping carefully. Beautiful.

Then I actually tried to cook with it.

Your hands are covered in flour. The screen keeps turning off. You can't tap because your fingers are wet. The text is too small to read from across the counter. The timer you set mentally has nothing to do with the timer in the app.

I had to rethink the entire cooking experience. Screen stays on while you're cooking. Text big enough to read from a meter away. Voice that reads instructions out loud so you don't have to touch the screen. Step-by-step mode where you just swipe — or better, use your voice — to go to the next step.

**The metaphor:** It's like designing a car dashboard. It looks perfect in the showroom. But drive it in the rain at night with tired eyes and suddenly you realize the speedometer is unreadable and the buttons are too small. The real test is in real conditions, not in the lab.

These "obvious" things took as much time as the AI features. And they're what makes the difference between an app someone downloads and an app someone actually uses every day.

## Wall #5: The last 5% takes 50% of the time

The app was "done" after about two months. Import worked. Chef worked. Pantry worked. Meal planner worked. Shopping list worked. Even the recipe book printing feature — where you can select recipes and order a real physical book — was functional.

But "functional" and "ready for the App Store" are two very different things.

The last 5% is a monster. It's the dark mode that looks great on the home screen but breaks on one specific dialog. It's the edge case where someone pastes a URL that's not a recipe. It's the shopping list that groups items by category but puts "eggs" in the wrong category. It's the onboarding that makes sense to me but confuses my mom.

It's testing on fifteen different screen sizes. It's making sure the app works offline because you're in the kitchen, not at your desk with perfect Wi-Fi. It's writing a privacy policy because your app handles API keys and you need to explain that no, you don't spy on people's recipes.

The book printing feature alone — where you select recipes, choose a theme, preview a real PDF, and order a printed book — that "simple" feature has a 4-step wizard, three different themes, PDF generation, an API integration with a print-on-demand service, shipping address forms, and a legal notice. Each step has edge cases. Each edge case needs handling.

I call this the "98% trap." The app looks 98% done, so you think you're almost there. But that last 2% is spread across every single screen, every single feature, every single interaction. And it takes as long as the first 98% combined.

## What I learned

Building CookBook AI taught me three things:

**1. Simple apps aren't simple.** "Paste a URL, get a recipe" sounds like a weekend project. It's not. Behind every simple feature is a cascade of edge cases, fallback strategies, and decisions that took days to figure out.

**2. Test in real conditions.** Your desk is not a kitchen. Your clean fingers are not flour-covered hands. Your perfect Wi-Fi is not a dead zone behind the fridge. The sooner you test in real conditions, the sooner you build something people actually use.

**3. The last 5% is the whole product.** Nobody cares about your AI if the dark mode is broken. Nobody cares about your recipe import if the text is too small to read. The polish — the small details — that's what separates a downloaded app from a loved app.

CookBook AI is almost ready. [The waitlist is open](/cookbookai) if you want to be the first to try it.

> Building a cooking app taught me more about patience than any recipe ever could. Sometimes you need to let things simmer.`,
    date: '2026-03-03',
    readTime: '7 min',
    tags: ['CookBook AI', 'Solo Dev', 'Behind the scenes'],
    icon: '🍳',
    gradient: 'from-orange-500 to-red-500',
  },
];
