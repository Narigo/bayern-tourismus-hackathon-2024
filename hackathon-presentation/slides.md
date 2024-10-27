---
# You can also start simply with 'default'
theme: default
title: Bayern Tourismus Hackathon 2024
info: Presentation for our hackathon ideas
author: Jörn Bernhardt
highlighter: shiki
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
defaults:
  transition: fade-out
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
routerMode: hash
# take snapshot for each slide in the overview
overviewSnapshots: true
---

# Bayern Tourismus Hackathon 2024

---

```yaml
layout: image-right
image: /images/svelte-logo.svg
```

## Ideen

1. Easy Walks 🧑‍🦽
2. Hiking trips 🚶
3. Collecting POIs 📸

<!--
Easy Walks 🧑‍🦽 - Findet Hotels für Gehbehinderte in einem Bereich und sortiert diese nach barrierefreien Points Of Interest in sehr nahem Umfeld

Hiking trips 🚶 - Nutzt BayernCloud Daten zum Generieren von Wandertouren: Wo starten, wo enden, wie viel Zeit habe ich.

Collecting POIs 📸 - Bei den Points of Interest gibt es QR codes zum Scannen. Je mehr man einsammelt und je nach Klassifikation bekommt man Achievements
-->

---

```yaml
layout: cover
```

## Was wurde aus...

🤔

---

```yaml
layout: image-right
image: /images/easy-walks.png
```

<span class="text-sm">Was wurde aus...</span>

## Easy Walks 🧑‍🦽

<v-clicks>

- Grobe Implementierung
- Auswahl eines Punktes
- Sammeln der Unterkünfte und POIs
  - Filterung fehlt
- Distanzen zwischen Unterkünften und POIs berechnen
  - Ranking nach Distanzen fehlt
  - Bewertung der POIs (wäre schön in der API)

</v-clicks>

---

```yaml
layout: image-right
image: /images/hiking-trips.png
```

<span class="text-sm">Was wurde aus...</span>

## Hiking trips 🚶

<v-clicks>

- Grobe Idee, wie man selektiert
- Grobe Idee, wie man die Wege schneidet
- Nutzung weiterer Services, um die Routen zu berechnen

</v-clicks>

---

```yaml
layout: image-right
image: /images/robot.png
transition: none
```

<span class="text-sm">Was wurde aus...</span>

## Collecting POIs 📸

- ChatGPT

---

```yaml
layout: image-right
image: /images/franzi-und-leni.webp
transition: none
```

<span class="text-sm">Was wurde aus...</span>

## Collecting POIs 📸

- ChatGPT
- Leni, die Lederhosen-Legende
- Franzi, die Dirndl-Diva

---

```yaml
layout: image-right
image: /images/duell.webp
transition: none
```

<span class="text-sm">Was wurde aus...</span>

## Collecting POIs 📸

- ChatGPT
- Leni, die Lederhosen-Legende
- Franzi, die Dirndl-Diva
- Geschichten

---

```yaml
layout: image-right
image: /images/duell-ausgang-mit-kleidertausch.webp
transition: none
```

<span class="text-sm">Was wurde aus...</span>

## Collecting POIs 📸

- ChatGPT
- Leni, die Lederhosen-Legende
- Franzi, die Dirndl-Diva
- Geschichten
- Seltsame Geschichten

---

```yaml
layout: image-right
image: /images/detlef.webp
transition: none
```

<span class="text-sm">Was wurde aus...</span>

## Collecting POIs 📸

- ChatGPT
- Leni, die Lederhosen-Legende
- Franzi, die Dirndl-Diva
- Geschichten
- Seltsame Geschichten
- SEHR seltsame Geschichten

---

```yaml
layout: image-right
image: /images/gewinnerin.webp
transition: none
```

<span class="text-sm">Was wurde aus...</span>

## Collecting POIs 📸

- ChatGPT
- Leni, die Lederhosen-Legende
- Franzi, die Dirndl-Diva
- Geschichten
- Seltsame Geschichten
- SEHR seltsame Geschichten
- WIRKLICH seltsame Geschichten

---

```yaml
layout: iframe-right
url: http://localhost:5173/franzi-und-leni
transition: none
```

<span class="text-sm">Was wurde aus...</span>

## Collecting POIs 📸

- ChatGPT
- Leni, die Lederhosen-Legende
- Franzi, die Dirndl-Diva
- Geschichten
- Seltsame Geschichten
- SEHR seltsame Geschichten
- WIRKLICH seltsame Geschichten
- Webseite

---

```yaml
layout: two-cols
transition: none
```

<span class="text-sm">Was wurde aus...</span>

## Collecting POIs 📸

- ChatGPT
- Leni, die Lederhosen-Legende
- Franzi, die Dirndl-Diva
- Geschichten
- Seltsame Geschichten
- SEHR seltsame Geschichten
- WIRKLICH seltsame Geschichten
- Webseite
- Titelsong

::right::

<div class="h-full grid place-items-center">
<video controls src="/images/Alpenabenteuer.mp4" title="Alpenabenteuer mit Franzi und Leni"></video>
</div>

---

## Was könnte man (realistisch) weiter machen

<v-clicks>

- Easy Walks wirklich ausbauen
- Collecting POIs mit Achievements je nach Klassifikation
  - 1 Berg: Gipfelstürmer
  - 3 Museen: Kultur interessiert
  - 7 Museen: Kultur begeistert
- Hiking trips

</v-clicks>
