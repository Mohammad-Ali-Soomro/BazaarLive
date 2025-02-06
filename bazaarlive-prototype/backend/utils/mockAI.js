// This file contains utility functions for simulating AI behavior, such as fake product tagging.

const mockProductTags = [
    "Technology",
    "Education",
    "Entertainment",
    "Lifestyle",
    "Health",
    "Travel",
    "Food",
    "Fashion",
];

function generateFakeTags(numTags) {
    const tags = [];
    for (let i = 0; i < numTags; i++) {
        const randomIndex = Math.floor(Math.random() * mockProductTags.length);
        tags.push(mockProductTags[randomIndex]);
    }
    return tags;
}

module.exports = {
    generateFakeTags,
};