import React from 'react';
import { Section } from './ui/Section';

const galleryItems = [
    {
        url: '/images/gallery-1.jpg',
        title: 'Modern Staircase',
        category: 'Interior',
        type: 'image'
    },
    {
        url: '/images/v 1.mp4',
        title: 'Structural Excellence',
        category: 'Construction',
        type: 'video'
    },
    {
        url: '/images/gallery-2.jpg',
        title: 'Elegant Living Space',
        category: 'Design',
        type: 'image'
    },
    {
        url: '/images/gallery-3.jpg',
        title: 'Custom Railing Detail',
        category: 'Craftsmanship',
        type: 'image'
    },
    {
        url: '/images/gallery-4.jpg',
        title: 'Luxury Interior',
        category: 'Interior',
        type: 'image'
    },
    {
        url: '/images/v 2.mp4',
        title: 'Modern Architecture',
        category: 'Building',
        type: 'video'
    },
    {
        url: '/images/gallery-5.jpg',
        title: 'Sleek Kitchen',
        category: 'Modular Kitchen',
        type: 'image'
    },
    {
        url: '/images/gallery- 6.jpeg',
        title: 'Modern Living',
        category: 'Design',
        type: 'image'
    },
    {
        url: '/images/gallery - 7.jpeg',
        title: 'Premium Project',
        category: 'Construction',
        type: 'image'
    }
];

export const Gallery: React.FC = () => {
    return (
        <Section id="gallery" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="font-display font-bold text-4xl mb-4 text-primary">Our Portfolio</h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <p className="max-w-2xl mx-auto text-slate-600">
                    Explore our recent projects and see the quality of craftsmanship we bring to every home.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="aspect-square overflow-hidden">
                            {item.type === 'video' ? (
                                <video
                                    src={item.url}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            ) : (
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <span className="text-secondary text-sm font-bold tracking-wider uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {item.category}
                            </span>
                            <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
