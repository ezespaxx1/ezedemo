import Image from 'next/image';

import { Countdown } from '@/components/Countdown';
import { FadeIn } from '@/components/FadeIn';
import { Monogram } from '@/components/Monogram';
import { NavBar } from '@/components/NavBar';
import { Section } from '@/components/Section';
import { couple, navigation, sections } from '@/content/wedding-content';

export default function HomePage() {
  return (
    <main id="top" className="relative overflow-hidden bg-botanical-fade">
      <NavBar links={navigation} />

      <section className="relative min-h-[88vh] border-b border-gold/20 px-6 pb-16 pt-20 md:pt-28" aria-labelledby="hero-title">
        <div className="absolute inset-0 opacity-15" aria-hidden>
          <div className="path-lines h-full w-full" />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <Monogram initials={couple.monogram} />
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold">{couple.dateText}</p>
            <h1 id="hero-title" className="mt-4 font-serif text-5xl leading-[1.05] text-charcoal md:text-7xl">
              {sections.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cocoa">{sections.hero.subtitle}</p>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-sage">{couple.location}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#rsvp" className="rounded-full bg-charcoal px-7 py-3 text-sm text-cream transition hover:bg-cocoa">
                {sections.hero.ctaPrimary}
              </a>
              <a href="#our-story" className="rounded-full border border-gold px-7 py-3 text-sm text-charcoal transition hover:bg-gold/15">
                {sections.hero.ctaSecondary}
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            {/* Replace this placeholder hero image with a final portrait of the couple. */}
            <Image
              src="/images/hero-placeholder.svg"
              alt="Placeholder engagement portrait"
              width={900}
              height={1100}
              className="h-[520px] w-full rounded-t-[14rem] object-cover shadow-editorial"
            />
          </FadeIn>
        </div>
      </section>

      <Section id="welcome" eyebrow="A Note" title={sections.welcome.heading}>
        <FadeIn>
          <p className="max-w-3xl text-lg leading-relaxed text-cocoa">{sections.welcome.body}</p>
        </FadeIn>
      </Section>

      <Section id="our-story" eyebrow="Chapter I" title={sections.ourStory.heading} className="bg-white/50">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.ourStory.timeline.map((moment, i) => (
            <FadeIn key={moment.year} delay={i * 0.08} className="rounded-md border border-gold/20 bg-cream/80 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-gold">{moment.year}</p>
              <h3 className="mt-3 font-serif text-2xl text-charcoal">{moment.title}</h3>
              <p className="mt-3 text-cocoa">{moment.text}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="countdown" eyebrow="Until We Say I Do" title={sections.countdown.heading}>
        <FadeIn>
          <Countdown targetDate={sections.countdown.dateISO} />
        </FadeIn>
      </Section>

      <Section id="details" eyebrow="Wedding Day" title={sections.weddingDetails.heading} className="bg-white/50">
        <ul className="grid gap-4 md:grid-cols-2">
          {sections.weddingDetails.events.map((event, i) => (
            <FadeIn key={event.label} delay={i * 0.05} className="rounded-md border border-gold/20 bg-cream/80 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-sage">{event.label}</p>
              <p className="mt-2 font-serif text-2xl text-charcoal">{event.detail}</p>
            </FadeIn>
          ))}
        </ul>
      </Section>

      <Section id="travel-stay" eyebrow="For Our Guests" title={sections.travelStay.heading}>
        <p className="max-w-3xl text-cocoa">{sections.travelStay.intro}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {sections.travelStay.stays.map((stay, i) => (
            <FadeIn key={stay.name} delay={i * 0.06} className="rounded-md border border-gold/20 bg-cream/80 p-5">
              <h3 className="font-serif text-2xl text-charcoal">{stay.name}</h3>
              <p className="mt-2 text-cocoa">{stay.notes}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="gallery" eyebrow="Moments" title={sections.gallery.heading} className="bg-white/50">
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.gallery.images.map((image, i) => (
            <FadeIn key={image} delay={i * 0.06}>
              {/* Replace with curated engagement/travel images. */}
              <Image
                src={image}
                alt={`Gallery placeholder ${i + 1}`}
                width={900}
                height={700}
                className="h-72 w-full rounded-md object-cover shadow-editorial"
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="our-people" eyebrow="With Love" title={sections.ourPeople.heading}>
        <div className="grid gap-4 md:grid-cols-2">
          {sections.ourPeople.members.map((member) => (
            <div key={member.role} className="rounded-md border border-gold/20 bg-cream/80 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-sage">{member.role}</p>
              <p className="mt-2 font-serif text-2xl text-charcoal">{member.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="rsvp" eyebrow="Kindly Reply" title={sections.rsvp.heading} className="bg-white/50">
        <p className="max-w-2xl text-cocoa">{sections.rsvp.note}</p>
        <form className="mt-6 grid gap-4 rounded-md border border-gold/30 bg-cream/80 p-6 md:grid-cols-2" aria-label="RSVP form">
          <label className="text-sm text-cocoa">
            Full Name
            <input className="mt-2 w-full rounded-md border border-champagne bg-white px-3 py-2" placeholder="Your name" />
          </label>
          <label className="text-sm text-cocoa">
            Email
            <input type="email" className="mt-2 w-full rounded-md border border-champagne bg-white px-3 py-2" placeholder="name@example.com" />
          </label>
          <label className="text-sm text-cocoa">
            Will you attend?
            <select className="mt-2 w-full rounded-md border border-champagne bg-white px-3 py-2">
              <option>Joyfully attending</option>
              <option>Regretfully declining</option>
            </select>
          </label>
          <label className="text-sm text-cocoa">
            Meal Preference
            <input className="mt-2 w-full rounded-md border border-champagne bg-white px-3 py-2" placeholder="Optional" />
          </label>
          <label className="text-sm text-cocoa md:col-span-2">
            Note for the couple
            <textarea className="mt-2 w-full rounded-md border border-champagne bg-white px-3 py-2" rows={4} placeholder="Share a note..." />
          </label>
          <button type="submit" className="md:col-span-2 rounded-full bg-charcoal px-6 py-3 text-sm text-cream transition hover:bg-cocoa">
            Submit RSVP
          </button>
        </form>
      </Section>

      <Section id="gifts" eyebrow="Registry" title={sections.gifts.heading}>
        <p className="max-w-3xl text-cocoa">{sections.gifts.body}</p>
      </Section>

      <Section id="faq" eyebrow="Before You Arrive" title={sections.faq.heading} className="bg-white/50">
        <div className="space-y-4">
          {sections.faq.items.map((item) => (
            <details key={item.question} className="rounded-md border border-gold/20 bg-cream/80 p-5">
              <summary className="cursor-pointer list-none font-serif text-2xl text-charcoal">{item.question}</summary>
              <p className="mt-3 text-cocoa">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="guest-messages" eyebrow="Leave A Note" title={sections.guestMessages.heading}>
        <p className="max-w-3xl text-cocoa">{sections.guestMessages.intro}</p>
        <form className="mt-6 rounded-md border border-gold/20 bg-cream/80 p-6">
          <label className="text-sm text-cocoa">
            Your message
            <textarea className="mt-2 w-full rounded-md border border-champagne bg-white px-3 py-2" rows={5} placeholder="Write your wishes here..." />
          </label>
          <button type="submit" className="mt-4 rounded-full border border-gold px-6 py-2 text-sm text-charcoal transition hover:bg-gold/15">
            Add Message
          </button>
        </form>
      </Section>

      <Section id="meaning" eyebrow="Our Reflection" title={sections.marriageMeans.heading} className="bg-white/50">
        <p className="max-w-4xl text-lg leading-relaxed text-cocoa">{sections.marriageMeans.body}</p>
      </Section>

      <footer className="border-t border-gold/30 bg-charcoal px-6 py-16 text-cream">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">With gratitude</p>
          <h2 className="mt-4 font-serif text-5xl">{sections.thankYou.heading}</h2>
          <p className="mt-4 max-w-2xl text-champagne">{sections.thankYou.body}</p>
          <p className="mt-8 text-sm text-champagne/80">© {new Date().getFullYear()} {couple.names}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
