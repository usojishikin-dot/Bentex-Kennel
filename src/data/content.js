export const services = [
    {
        id: 1,
        name: "Dog Boarding",
        description: "Safe, comfortable overnight stays with 24/7 supervision, spacious suites, and plenty of playtime.",
        priceFrom: 45,
        duration: "per night",
        features: ["Climate-controlled rooms", "Daily exercise", "Webcam access", "Medication administration"],
        icon: "🏠"
    },
    {
        id: 2,
        name: "Dog Walking",
        description: "Professional walks tailored to your dog's energy level and needs, rain or shine.",
        priceFrom: 25,
        duration: "per walk",
        features: ["GPS tracking", "Photo updates", "Flexible scheduling", "Group or solo walks"],
        icon: "🚶"
    },
    {
        id: 3,
        name: "Dog Grooming",
        description: "Full-service spa treatments from baths to breed-specific styling by certified groomers.",
        priceFrom: 40,
        duration: "per session",
        features: ["Bath & brush", "Nail trimming", "Ear cleaning", "Premium products"],
        icon: "✨"
    },
    {
        id: 4,
        name: "Dog Adoption",
        description: "Find your forever friend! We partner with local rescues to help dogs find loving homes.",
        priceFrom: 0,
        duration: "free consultation",
        features: ["Meet & greet sessions", "Behavior assessment", "Post-adoption support", "Vet records included"],
        icon: "❤️"
    },
    {
        id: 5,
        name: "Dog Breeding",
        description: "Ethical breeding services with health-tested parents, veterinary oversight, and lifetime support.",
        priceFrom: 150,
        duration: "consultation",
        features: ["Health screening", "Genetic testing", "Puppy socialization", "Registration papers"],
        icon: "🐕"
    }
];

export const gallery = [
    { id: 1, type: "image", url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800", category: "play" },
    { id: 2, type: "image", url: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800", category: "grooming" },
    { id: 3, type: "image", url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800", category: "play" },
    { id: 4, type: "image", url: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800", category: "facility" },
    { id: 5, type: "image", url: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800", category: "boarding" },
    { id: 6, type: "image", url: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800", category: "play" },
    { id: 7, type: "image", url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800", category: "grooming" },
    { id: 8, type: "image", url: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=800", category: "facility" },
    { id: 9, type: "video", url: "https://videos.pexels.com/video-files/4148028/4148028-hd_1920_1080_25fps.mp4", category: "play" },
];

export const adoptionDogs = [
    {
        id: 1,
        name: "Max",
        age: "2 years",
        size: "Medium",
        temperamentTags: ["Friendly", "Good with kids", "Trained"],
        images: ["https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600"],
        description: "Max is a playful Golden Retriever mix who loves fetch and cuddles. He's great with children and other dogs."
    },
    {
        id: 2,
        name: "Luna",
        age: "1 year",
        size: "Small",
        temperamentTags: ["Energetic", "Loyal", "Apartment-friendly"],
        images: ["https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600"],
        description: "Luna is a sweet Beagle with endless energy. Perfect for active families who love outdoor adventures."
    },
    {
        id: 3,
        name: "Rocky",
        age: "4 years",
        size: "Large",
        temperamentTags: ["Calm", "Good with cats", "Gentle giant"],
        images: ["https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600"],
        description: "Rocky is a gentle Labrador who enjoys lazy afternoons and belly rubs. Great for families with cats."
    },
    {
        id: 4,
        name: "Bella",
        age: "3 years",
        size: "Medium",
        temperamentTags: ["Smart", "Active", "Loves water"],
        images: ["https://images.unsplash.com/photo-1544568100-847a948585b9?w=600"],
        description: "Bella is an intelligent Border Collie mix who excels at agility and loves swimming."
    }
];

export const reviews = [
    {
        id: 1,
        ownerName: "Sarah Mitchell",
        rating: 5,
        comment: "Bentex Kennel has been incredible! My anxious rescue felt at home within hours. The daily photo updates gave me such peace of mind.",
        dogName: "Cooper",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
    },
    {
        id: 2,
        ownerName: "James Chen",
        rating: 5,
        comment: "The grooming service is outstanding. My poodle looks magazine-ready every time. The staff truly cares about each dog.",
        dogName: "Coco",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
    },
    {
        id: 3,
        ownerName: "Emily Rodriguez",
        rating: 5,
        comment: "We adopted our sweet Luna through Bentex Kennel. The process was seamless and the support afterward has been amazing.",
        dogName: "Luna",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
    },
    {
        id: 4,
        ownerName: "Michael Thompson",
        rating: 5,
        comment: "The dog walking service is a lifesaver for my busy schedule. GPS tracking and photo updates keep me connected with Max.",
        dogName: "Max",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
    },
    {
        id: 5,
        ownerName: "Amanda Foster",
        rating: 5,
        comment: "Cleanest facility I've ever seen. The staff knows every dog by name. It's clear they genuinely love what they do.",
        dogName: "Buddy",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200"
    }
];

export const faqs = [
    {
        question: "What vaccinations are required for boarding?",
        answer: "All dogs must be up-to-date on Rabies, DHPP, and Bordetella vaccines. We require proof of vaccination at least 48 hours before their stay. If your dog isn't current, we can recommend trusted local vets."
    },
    {
        question: "How do you ensure my dog's safety?",
        answer: "Safety is our top priority. Our facility features 24/7 staff supervision, secure fencing, climate control, and separate play areas by size and temperament. All staff are certified in pet first aid and CPR."
    },
    {
        question: "What are the drop-off and pick-up times?",
        answer: "Standard hours are 7 AM - 7 PM daily. Early drop-off (6 AM) and late pick-up (9 PM) are available for an additional fee. We're closed on major holidays but offer holiday boarding packages."
    },
    {
        question: "What is your cancellation policy?",
        answer: "Cancellations made 48+ hours before the reservation receive a full refund. Cancellations within 24-48 hours receive a 50% refund. Same-day cancellations are non-refundable, except for emergencies."
    },
    {
        question: "Can I bring my dog's own food and belongings?",
        answer: "Absolutely! We encourage bringing your dog's regular food to maintain their diet. You may also bring a favorite toy or blanket. Please label all items with your dog's name."
    },
    {
        question: "How do you handle dogs with medical needs?",
        answer: "We're experienced with insulin injections, oral medications, and special diets. Our staff includes certified veterinary technicians. Please discuss specific needs during your consultation."
    }
];

export const trustFeatures = [
    {
        title: "Trained & Certified Staff",
        description: "Every team member is certified in pet first aid, CPR, and animal behavior. We invest in ongoing training.",
        icon: "🎓"
    },
    {
        title: "Clean & Sanitized Facility",
        description: "Hospital-grade cleaning protocols ensure a spotless, hygienic environment. Inspected monthly.",
        icon: "🧼"
    },
    {
        title: "24/7 Vet Support",
        description: "Partnership with local veterinary clinics means immediate care is always available for emergencies.",
        icon: "🏥"
    },
    {
        title: "Daily Photo & Video Updates",
        description: "Stay connected with your furry friend through our app. See photos, videos, and activity reports daily.",
        icon: "📱"
    }
];

export const howItWorks = [
    {
        step: 1,
        title: "Book Online",
        description: "Choose your service, select dates, and book instantly through our website. It takes less than 2 minutes."
    },
    {
        step: 2,
        title: "Meet & Drop-off",
        description: "First-timers get a complimentary tour. Drop off your pup and let us handle the rest."
    },
    {
        step: 3,
        title: "Care & Updates",
        description: "Your dog enjoys premium care while you receive photos, videos, and updates throughout their stay."
    }
];

export const stats = [
    { value: "15,000+", label: "Happy Dogs Served" },
    { value: "4.9", label: "Average Rating" },
    { value: "8+", label: "Years Experience" },
    { value: "50+", label: "Team Members" }
];

export const businessInfo = {
    name: "Bentex Kennel",
    tagline: "Where Every Tail Wags",
    phone: "+234 813 025 4420",
    email: "usojishikin@gmail.com",
    address: "Mandong drive ECWA staff",
    hours: {
        weekdays: "7:00 AM - 7:00 PM",
        weekends: "8:00 AM - 6:00 PM"
    },
    social: {
        instagram: "https://instagram.com/pawfectcare",
        facebook: "https://facebook.com/pawfectcare",
        twitter: "https://twitter.com/pawfectcare",
        tiktok: "https://tiktok.com/@pawfectcare"
    }
};
