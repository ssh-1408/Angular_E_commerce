import { Product } from "./product.model";

export const PRODUCTS: Product[] = [
    // Apple
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: 1299,
        description: 'The ultimate iPhone experience with A17 Pro chip and titanium design.',
        imageUrl: 'img/smartphones-iphone-15promax.jpg',
        category: 'smartphone',
        rating: 4.9,
        brand: 'Apple',
        quantity: 1,
        availability: true
    },
    {
        id: 2,
        name: 'iPhone 14',
        price: 799,
        description: 'A powerful smartphone with A15 Bionic chip and advanced camera.',
        imageUrl: 'img/smartphones-iphone14.jpg',
        category: 'smartphone',
        rating: 4.7,
        brand: 'Apple',
        quantity: 1,
        availability: false
    },
    {
        id: 3,
        name: 'iPhone SE (2022)',
        price: 429,
        description: 'Compact design with the power of A15 Bionic chip.',
        imageUrl: 'img/smartphones-iphone-SE.jpg',
        category: 'smartphone',
        rating: 4.5,
        brand: 'Apple',
        quantity: 1,
        availability: true
    },

    // Google
    {
        id: 4,
        name: 'Google Pixel 8 Pro',
        price: 999,
        description: 'Flagship Google phone with Tensor G3 and AI-powered features.',
        imageUrl: 'img/smartphones-google-pixel8Pro.jpg',
        category: 'smartphone',
        rating: 4.8,
        brand: 'Google',
        quantity: 1,
        availability: true
    },
    {
        id: 5,
        name: 'Google Pixel 7',
        price: 599,
        description: 'Great camera with Google’s AI smarts and clean Android experience.',
        imageUrl: 'img/smartphones-google-pixel7.jpg',
        category: 'smartphone',
        rating: 4.6,
        brand: 'Google',
        quantity: 1,
        availability: true
    },
    {
        id: 6,
        name: 'Google Pixel 6a',
        price: 349,
        description: 'Affordable Google phone with great camera and software updates.',
        imageUrl: 'img/smartphones-google-pixel-6a.jpg',
        category: 'smartphone',
        rating: 4.3,
        brand: 'Google',
        quantity: 1,
        availability: true
    },

    // Xiaomi
    {
        id: 7,
        name: 'Xiaomi 13 Pro',
        price: 899,
        description: 'Top performance with Snapdragon 8 Gen 2 and Leica camera system.',
        imageUrl: 'img/smartphones-xiaomi13a.jpg',
        category: 'smartphone',
        rating: 4.7,
        brand: 'Xiaomi',
        quantity: 1,
        availability: false
    },
    {
        id: 8,
        name: 'Xiaomi Redmi Note 12',
        price: 299,
        description: 'Affordable smartphone with big battery and fast charging.',
        imageUrl: 'img/smartphones-Xiaomi-Redmi-12.jpg',
        category: 'smartphone',
        rating: 4.4,
        brand: 'Xiaomi',
        quantity: 1,
        availability: true
    },
    {
        id: 9,
        name: 'Xiaomi Poco F5',
        price: 499,
        description: 'Performance beast with gaming-friendly hardware.',
        imageUrl: 'img/smartphones-Xiaomi-Poco-F5.jpg',
        category: 'smartphone',
        rating: 4.5,
        brand: 'Xiaomi',
        quantity: 1,
        availability: true
    },

    // Samsung
    {
        id: 10,
        name: 'Samsung Galaxy S23 Ultra',
        price: 1199,
        description: 'Samsung’s flagship with 200MP camera and S Pen support.',
        imageUrl: 'img/smartphones-galaxy-s23-ultra.jpg',
        category: 'smartphone',
        rating: 4.9,
        brand: 'Samsung',
        quantity: 1,
        availability: false
    },
    {
        id: 11,
        name: 'Samsung Galaxy A54',
        price: 449,
        description: 'A great mid-range device with AMOLED display and solid camera.',
        imageUrl: 'img/smartphones-samsung-galaxy-flip.jpg',
        category: 'smartphone',
        rating: 4.5,
        brand: 'Samsung',
        quantity: 1,
        availability: true
    },
    {
        id: 12,
        name: 'Samsung Galaxy Z Flip 5',
        price: 999,
        description: 'Compact foldable phone with powerful features.',
        imageUrl: 'img/smartphones-galaxy-z-flip-5.jpg',
        category: 'smartphone',
        rating: 4.7,
        brand: 'Samsung',
        quantity: 1,
        availability: true
    },

    // Huawei
    {
        id: 13,
        name: 'Huawei P60 Pro',
        price: 999,
        description: 'Huawei’s flagship with XMAGE camera and elegant design.',
        imageUrl: 'img/smartphones-huawei-p60-pro.jpg',
        category: 'smartphone',
        rating: 4.7,
        brand: 'Huawei',
        quantity: 1,
        availability: true
    },
    {
        id: 14,
        name: 'Huawei Nova 11',
        price: 499,
        description: 'Stylish phone with great camera for its price range.',
        imageUrl: 'img/smartphones-huawei-nova-11.jpg',
        category: 'smartphone',
        rating: 4.4,
        brand: 'Huawei',
        quantity: 1,
        availability: true
    },
    {
        id: 15,
        name: 'Huawei Mate X3',
        price: 1799,
        description: 'Premium foldable smartphone with advanced camera technology.',
        imageUrl: 'img/smartphones-huawei-mate-x3.jpg',
        category: 'smartphone',
        rating: 4.8,
        brand: 'Huawei',
        quantity: 1,
        availability: true
    },
    // Acer Notebooks
    {
        id: 16,
        name: 'Acer Aspire 5',
        price: 599,
        description: 'Affordable and reliable laptop for everyday use with AMD Ryzen 5.',
        imageUrl: 'img/notebook-acer-aspire-5.jpg',
        category: 'notebook',
        rating: 4.5,
        brand: 'Acer',
        quantity: 1,
        availability: true
    },
    {
        id: 17,
        name: 'Acer Predator Helios 300',
        price: 1299,
        description: 'Powerful gaming laptop with NVIDIA RTX graphics and 144Hz display.',
        imageUrl: 'img/notebook-acer-predator-helios-300.jpg',
        category: 'notebook',
        rating: 4.7,
        brand: 'Acer',
        quantity: 1,
        availability: true
    },
    {
        id: 18,
        name: 'Acer Swift X',
        price: 899,
        description: 'Ultra-thin laptop with excellent performance for creators.',
        imageUrl: 'img/notebook-acer-swift-x.jpg',
        category: 'notebook',
        rating: 4.6,
        brand: 'Acer',
        quantity: 1,
        availability: true
    },

    // Apple MacBooks
    {
        id: 19,
        name: 'MacBook Air M2',
        price: 1199,
        description: 'Super lightweight notebook with Apple M2 chip and long battery life.',
        imageUrl: 'img/notebook-macbook-air-m2.jpg',
        category: 'notebook',
        rating: 4.8,
        brand: 'Apple',
        quantity: 1,
        availability: true
    },
    {
        id: 20,
        name: 'MacBook Pro 14"',
        price: 1999,
        description: 'Powerful MacBook with M3 Pro chip and stunning Retina display.',
        imageUrl: 'img/notebook-macbook-pro-14.jpg',
        category: 'notebook',
        rating: 4.9,
        brand: 'Apple',
        quantity: 1,
        availability: true
    },
    {
        id: 21,
        name: 'MacBook Pro 16"',
        price: 2499,
        description: 'Professional-grade notebook with M3 Max for creators and developers.',
        imageUrl: 'img/notebook-macbook-pro-16.jpg',
        category: 'notebook',
        rating: 5.0,
        brand: 'Apple',
        quantity: 1,
        availability: true
    },

    // HP Notebooks
    {
        id: 22,
        name: 'HP Pavilion 15',
        price: 649,
        description: 'Reliable laptop with Intel i5 processor and FHD display.',
        imageUrl: 'img/notebook-hp-pavilion-15.jpg',
        category: 'notebook',
        rating: 4.5,
        brand: 'HP',
        quantity: 1,
        availability: true
    },
    {
        id: 23,
        name: 'HP Envy x360',
        price: 999,
        description: 'Convertible notebook with touchscreen and powerful hardware.',
        imageUrl: 'img/notebook-hp-envy-x360.jpg',
        category: 'notebook',
        rating: 4.7,
        brand: 'HP',
        quantity: 1,
        availability: true
    },
    {
        id: 24,
        name: 'HP Omen 16',
        price: 1399,
        description: 'Gaming beast with RTX 4060 and advanced cooling.',
        imageUrl: 'img/notebook-hp-omen-16.jpg',
        category: 'notebook',
        rating: 4.8,
        brand: 'HP',
        quantity: 1,
        availability: true
    },
    // Bose Headphones
    {
        id: 25,
        name: 'Bose QuietComfort 45',
        price: 329,
        description: 'World-class noise cancellation and high-fidelity audio.',
        imageUrl: 'img/headphones-bose-quietcomfort-45.jpg',
        category: 'headphone',
        rating: 4.8,
        brand: 'Bose',
        quantity: 1,
        availability: true
    },
    {
        id: 26,
        name: 'Bose Sport Earbuds',
        price: 179,
        description: 'Wireless earbuds designed for workouts with secure fit.',
        imageUrl: 'img/hedphones-bose-sport-earbuds.jpg',
        category: 'headphone',
        rating: 4.5,
        brand: 'Bose',
        quantity: 1,
        availability: true
    },
    {
        id: 27,
        name: 'Bose 700',
        price: 379,
        description: 'Premium design and advanced noise cancelling technology.',
        imageUrl: 'img/headphones-bose-700.jpg',
        category: 'headphone',
        rating: 4.7,
        brand: 'Bose',
        quantity: 1,
        availability: true
    },

    // Sony Headphones
    {
        id: 28,
        name: 'Sony WH-1000XM5',
        price: 349,
        description: 'Industry-leading noise cancellation and superior sound.',
        imageUrl: 'img/headphones-sony-wh-1000xm5.jpg',
        category: 'headphone',
        rating: 4.9,
        brand: 'Sony',
        quantity: 1,
        availability: true
    },
    {
        id: 29,
        name: 'Sony WF-1000XM4',
        price: 279,
        description: 'True wireless earbuds with exceptional noise cancelling.',
        imageUrl: 'img/headphones-sony-wf-1000xm4.jpg',
        category: 'headphone',
        rating: 4.8,
        brand: 'Sony',
        quantity: 1,
        availability: true
    },
    {
        id: 30,
        name: 'Sony LinkBuds',
        price: 149,
        description: 'Open-ring design for staying connected to the environment.',
        imageUrl: 'img/headphones-sony-linkbuds.jpg',
        category: 'headphone',
        rating: 4.2,
        brand: 'Sony',
        quantity: 1,
        availability: true
    },

    // Sennheiser Headphones
    {
        id: 31,
        name: 'Sennheiser Momentum 4',
        price: 349,
        description: 'Premium over-ear headphones with crystal clear sound.',
        imageUrl: 'img/headphones-sennheiser-momentum-4.jpg',
        category: 'headphone',
        rating: 4.7,
        brand: 'Sennheiser',
        quantity: 1,
        availability: true
    },
    {
        id: 32,
        name: 'Sennheiser CX True Wireless',
        price: 129,
        description: 'Great sound in a compact and affordable package.',
        imageUrl: 'img/headphones-Sennheiser-CX-true-Wireless.jpg',
        category: 'headphone',
        rating: 4.4,
        brand: 'Sennheiser',
        quantity: 1,
        availability: true
    },
    {
        id: 33,
        name: 'Sennheiser HD 560S',
        price: 199,
        description: 'Reference-grade open-back headphones for audiophiles.',
        imageUrl: 'img/headphones-sennheiser-hd-560s.jpg',
        category: 'headphone',
        rating: 4.6,
        brand: 'Sennheiser',
        quantity: 1,
        availability: true
    },
    // Apple Smartwatches
    {
        id: 34,
        name: 'Apple Watch Series 9',
        price: 399,
        description: 'Advanced health features and powerful performance with S9 chip.',
        imageUrl: 'img/smartwatch-apple-watch-series-9.jpg',
        category: 'smartwatch',
        rating: 4.8,
        brand: 'Apple',
        quantity: 1,
        availability: true
    },
    {
        id: 35,
        name: 'Apple Watch SE (2023)',
        price: 249,
        description: 'Essential Apple Watch experience at a more affordable price.',
        imageUrl: 'img/smartwatch-apple-watch-se-2023.jpg',
        category: 'smartwatch',
        rating: 4.6,
        brand: 'Apple',
        quantity: 1,
        availability: true
    },

    // Samsung Smartwatches
    {
        id: 36,
        name: 'Samsung Galaxy Watch6',
        price: 299,
        description: 'Comprehensive health tracking with AMOLED display.',
        imageUrl: 'img/smartwatch-samsung-galaxy-watch6.jpg',
        category: 'smartwatch',
        rating: 4.7,
        brand: 'Samsung',
        quantity: 1,
        availability: true
    },
    {
        id: 37,
        name: 'Samsung Galaxy Watch6 Classic',
        price: 399,
        description: 'Elegant rotating bezel with advanced fitness tracking.',
        imageUrl: 'img/smartwatch-Samsung-Galaxy-Watch6-Classic.jpg',
        category: 'smartwatch',
        rating: 4.8,
        brand: 'Samsung',
        quantity: 1,
        availability: true
    },
    {
        id: 38,
        name: 'Samsung Galaxy Fit 3',
        price: 99,
        description: 'Affordable fitness band with long battery life.',
        imageUrl: 'img/smartwatch-samsung-galaxy-fit-3.jpg',
        category: 'smartwatch',
        rating: 4.3,
        brand: 'Samsung',
        quantity: 1,
        availability: true
    },

    // Huawei Smartwatches
    {
        id: 39,
        name: 'Huawei Watch GT 4',
        price: 249,
        description: 'Stylish design with professional health tracking features.',
        imageUrl: 'img/smartwatch-huawei-watch-gt-4.jpg',
        category: 'smartwatch',
        rating: 4.6,
        brand: 'Huawei',
        quantity: 1,
        availability: true
    },
    {
        id: 40,
        name: 'Huawei Watch Fit 2',
        price: 149,
        description: 'Lightweight fitness smartwatch with great battery life.',
        imageUrl: 'img/smartwatch-huawei-watch-fit-2.jpg',
        category: 'smartwatch',
        rating: 4.4,
        brand: 'Huawei',
        quantity: 1,
        availability: true
    }

];
