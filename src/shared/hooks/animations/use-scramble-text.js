import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export function useScrambleText() {
  const playScramble = (title) => {
    if (!title) return;

    // store original text once
    if (!title.dataset.originalText) {
      title.dataset.originalText = title.textContent;
    }

    // kill previous animation cleanly
    gsap.killTweensOf(title);

    gsap.to(title, {
      duration: 1.2, // slightly longer = smoother
      ease: "power3.out", // buttery easing
      scrambleText: {
        text: title.dataset.originalText,
        chars: "abcdefghijklmnopqrstuvwxyz",
        speed: 0.4,        // slower scramble = smoother
        revealDelay: 0.15, // soft settle-in
      },
    });
  };

  return playScramble;
}
