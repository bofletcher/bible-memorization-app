# Project: Bible Memorization App

This is a Laravel + Inertia + React app to help users memorize Scripture using spaced repetition and interactive practice tools.

## Stack
- Laravel (backend)
- Inertia.js (SPA bridge)
- React (frontend)
- TailwindCSS (styling)
- Laravel Breeze (authentication)

## Core Features
- Register/Login
- Choose Bible translation (ESV, KJV, etc.)
- Browse and tag Bible verses from chosen translation
- Add verses to a personal "My Verses" list
- Memorization tools:
  - Fill-in-the-blank
  - First-letter prompts
  - Typing practice
- Track memorization progress per verse
- Light/dark mode (optional)

## Models

### 🔹 User
- Standard Laravel user model with authentication
- Has many `memorization_progress` records

### 🔹 Translation
- id
- name (e.g., "English Standard Version")
- abbreviation (e.g., "ESV")
- slug

### 🔹 Book
- id
- name (e.g., "Genesis")
- order (e.g., 1–66)
- testament (e.g., "OT" or "NT")
- translation_id (FK)

### 🔹 Chapter
- id
- book_id (FK)
- number (e.g., 1 for Genesis 1)

### 🔹 Verse
- id
- chapter_id (FK)
- number (e.g., 1 for Genesis 1:1)
- text

### 🔹 Tag
- id
- name

### 🔹 VerseTag (pivot)
- verse_id
- tag_id

### 🔹 MemorizationProgress
- id
- user_id
- verse_id
- last_reviewed_at
- interval (in days)
- ease_factor
- repetitions
- next_review_date
- correct_streak

## Goals
- Help users grow in Scripture memory daily
- Structure app with a clean translation-based hierarchy
- Keep UI simple, intuitive, and mobile-friendly
- Potential for offline support in future versions

## Notes
- Verses are structured under translations → books → chapters
- Users interact with verses scoped to their chosen translation
- Memorization is tracked per individual verse and per user
- Scripture text will be pre-seeded into the database per translation
