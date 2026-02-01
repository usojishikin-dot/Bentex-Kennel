// Adoptable Dogs - Enhanced with full profile data
export const adoptionDogs = [
    {
        id: 1,
        name: "Max",
        age: "2 years",
        ageCategory: "Adult",
        breed: "Golden Retriever Mix",
        gender: "Male",
        size: "Medium",
        vaccinated: true,
        neutered: true,
        temperamentTags: ["Friendly", "Good with kids", "Trained"],
        compatibility: {
            kids: true,
            dogs: true,
            cats: false,
            apartments: false
        },
        images: ["https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600"],
        story: "Max was found wandering the streets, but his gentle spirit never faded. He's been with us for 3 months and has blossomed into the most loving companion. He dreams of a family with a backyard where he can play fetch all day.",
        description: "Max is a playful Golden Retriever mix who loves fetch and cuddles. He's great with children and other dogs."
    },
    {
        id: 2,
        name: "Luna",
        age: "1 year",
        ageCategory: "Puppy",
        breed: "Beagle",
        gender: "Female",
        size: "Small",
        vaccinated: true,
        neutered: true,
        temperamentTags: ["Energetic", "Loyal", "Apartment-friendly"],
        compatibility: {
            kids: true,
            dogs: true,
            cats: true,
            apartments: true
        },
        images: ["https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600"],
        story: "Luna was surrendered when her previous owner moved overseas. She's a bundle of joy who quickly became everyone's favorite at the shelter. She's looking for an active family to match her endless energy.",
        description: "Luna is a sweet Beagle with endless energy. Perfect for active families who love outdoor adventures."
    },
    {
        id: 3,
        name: "Rocky",
        age: "4 years",
        ageCategory: "Adult",
        breed: "Labrador Retriever",
        gender: "Male",
        size: "Large",
        vaccinated: true,
        neutered: true,
        temperamentTags: ["Calm", "Good with cats", "Gentle giant"],
        compatibility: {
            kids: true,
            dogs: true,
            cats: true,
            apartments: false
        },
        images: ["https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600"],
        story: "Rocky spent his early years as a therapy dog. When his handler retired, Rocky came to us. He's incredibly gentle and patient, making him perfect for families with small children or other pets.",
        description: "Rocky is a gentle Labrador who enjoys lazy afternoons and belly rubs. Great for families with cats."
    },
    {
        id: 4,
        name: "Bella",
        age: "3 years",
        ageCategory: "Adult",
        breed: "Border Collie Mix",
        gender: "Female",
        size: "Medium",
        vaccinated: true,
        neutered: true,
        temperamentTags: ["Smart", "Active", "Loves water"],
        compatibility: {
            kids: true,
            dogs: true,
            cats: false,
            apartments: false
        },
        images: ["https://images.unsplash.com/photo-1544568100-847a948585b9?w=600"],
        story: "Bella was rescued from a farm where she wasn't getting the mental stimulation she needed. She's incredibly intelligent and thrives with puzzle toys and agility training. She's looking for an active owner who can keep up with her!",
        description: "Bella is an intelligent Border Collie mix who excels at agility and loves swimming."
    },
    {
        id: 5,
        name: "Charlie",
        age: "6 years",
        ageCategory: "Senior",
        breed: "Cocker Spaniel",
        gender: "Male",
        size: "Medium",
        vaccinated: true,
        neutered: true,
        temperamentTags: ["Gentle", "Quiet", "Low energy"],
        compatibility: {
            kids: true,
            dogs: true,
            cats: true,
            apartments: true
        },
        images: ["https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600"],
        story: "Charlie's owner passed away, and he's been patiently waiting for a new loving home. He's the perfect couch companion who just wants someone to love him in his golden years.",
        description: "Charlie is a calm senior dog who loves cuddles and short walks. Perfect for a quiet home."
    },
    {
        id: 6,
        name: "Daisy",
        age: "8 months",
        ageCategory: "Puppy",
        breed: "Poodle Mix",
        gender: "Female",
        size: "Small",
        vaccinated: true,
        neutered: false,
        temperamentTags: ["Playful", "Hypoallergenic", "Smart"],
        compatibility: {
            kids: true,
            dogs: true,
            cats: true,
            apartments: true
        },
        images: ["https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=600"],
        story: "Daisy was born at a rescue and has never known anything but love. She's a fluffy ball of happiness who would make an amazing first dog for any family.",
        description: "Daisy is an adorable Poodle mix puppy who's hypoallergenic and loves everyone she meets."
    }
];

// Adoption success stories
export const reviews = [
    {
        id: 1,
        ownerName: "Sarah Mitchell",
        rating: 5,
        comment: "We adopted Cooper 6 months ago and he's become the heart of our family. The team at Bentex made the whole process so smooth and supportive!",
        dogName: "Cooper",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
    },
    {
        id: 2,
        ownerName: "James Chen",
        rating: 5,
        comment: "After losing our old dog, we weren't sure if we were ready. Bentex helped us find Coco, and she's brought so much joy back into our lives.",
        dogName: "Coco",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
    },
    {
        id: 3,
        ownerName: "Emily Rodriguez",
        rating: 5,
        comment: "We adopted Luna for our daughter's birthday. The process was seamless and the follow-up support has been amazing. Luna is now her best friend!",
        dogName: "Luna",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
    },
    {
        id: 4,
        ownerName: "Michael Thompson",
        rating: 5,
        comment: "As a first-time dog owner, I was nervous. The Bentex team answered all my questions and matched me with Max, who's been the perfect companion.",
        dogName: "Max",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
    },
    {
        id: 5,
        ownerName: "Amanda Foster",
        rating: 5,
        comment: "We adopted a senior dog named Buddy and it's been the most rewarding experience. Bentex truly cares about finding the right match for every dog.",
        dogName: "Buddy",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200"
    }
];

// Adoption-focused FAQs
export const faqs = [
    {
        question: "What is the adoption process?",
        answer: "Our adoption process is simple: Browse our available dogs, submit an application, schedule a meet-and-greet, and if it's a match, take your new friend home! The entire process typically takes 3-7 days."
    },
    {
        question: "Is there an adoption fee?",
        answer: "Yes, our adoption fee ranges from $50-$150 depending on the dog's age and medical needs. This fee covers vaccinations, spaying/neutering, microchipping, and a health checkup. It's a small investment for a lifetime of love!"
    },
    {
        question: "Are the dogs vaccinated and health-checked?",
        answer: "Absolutely! Every dog in our care receives a full veterinary examination, up-to-date vaccinations, flea/tick treatment, and is spayed or neutered before adoption. We also provide complete medical records."
    },
    {
        question: "Can I return a dog if it doesn't work out?",
        answer: "We understand that sometimes things don't work out. We have a 30-day adjustment period where you can return the dog with no questions asked. We'd rather a dog come back to us than end up in a bad situation."
    },
    {
        question: "Do you do home visits?",
        answer: "For certain adoptions, especially with large breeds or dogs with special needs, we may conduct a brief home visit to ensure the environment is suitable. This is to protect both you and the dog."
    },
    {
        question: "Can I adopt if I live in an apartment?",
        answer: "Yes! Many of our dogs are apartment-friendly. We'll help you find a dog whose energy level and size are suitable for apartment living. Look for the 'Apartment-friendly' tag on dog profiles."
    }
];

// Why adopt from us - trust features
export const trustFeatures = [
    {
        title: "Ethical Adoption",
        description: "Every dog deserves a loving home. We never euthanize adoptable dogs and work tirelessly to find the perfect match.",
        icon: "❤️"
    },
    {
        title: "Health Guaranteed",
        description: "All dogs are fully vaccinated, microchipped, and receive a complete health check before going to their forever home.",
        icon: "🏥"
    },
    {
        title: "Lifetime Support",
        description: "Our relationship doesn't end at adoption. We provide ongoing support, training resources, and advice for life.",
        icon: "🤝"
    },
    {
        title: "Perfect Matching",
        description: "We take time to understand your lifestyle and match you with a dog whose personality and needs fit your family.",
        icon: "🎯"
    }
];

// Adoption process steps
export const howItWorks = [
    {
        step: 1,
        title: "Browse Dogs",
        description: "Explore our adoptable dogs and find one that catches your heart. Filter by age, size, and personality."
    },
    {
        step: 2,
        title: "Apply to Adopt",
        description: "Fill out a simple application telling us about yourself and your home. It only takes 5 minutes."
    },
    {
        step: 3,
        title: "Meet & Greet",
        description: "Schedule a visit to meet your potential new family member. See if you're the perfect match!"
    },
    {
        step: 4,
        title: "Take Home",
        description: "Complete the adoption, receive all records and supplies, and welcome your new best friend home!"
    }
];

// Adoption statistics
export const stats = [
    { value: "500+", label: "Dogs Adopted" },
    { value: "100%", label: "Satisfaction Rate" },
    { value: "5+", label: "Years Rescuing" },
    { value: "0", label: "Dogs Left Behind" }
];

// Business information - adoption focused
export const businessInfo = {
    name: "Bentex Adoption",
    tagline: "Find Your Forever Friend",
    phone: "+234 813 025 4420",
    email: "usojishikin@gmail.com",
    address: "Mandong drive ECWA staff",
    hours: {
        weekdays: "9:00 AM - 6:00 PM",
        weekends: "10:00 AM - 4:00 PM"
    },
    social: {
        instagram: "https://instagram.com/bentexadoption",
        facebook: "https://facebook.com/bentexadoption",
        twitter: "https://twitter.com/bentexadoption",
        tiktok: "https://tiktok.com/@bentexadoption"
    }
};
