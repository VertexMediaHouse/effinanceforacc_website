const reviews = [
    {
        name: "Mr. Marke Josefer",
        role: "CEO, PSDBOSS",
        image: "/assets/n.jpeg",
        review:
            "Manage and streamline operations across multiple locations."
    },
    {
        name: "Ronald Richards",
        role: "WordPress Developer",
        image: "/assets/n.jpeg",
        review:
            "Great support and amazing service."
    },
    {
        name: "Merry Jiucy",
        role: "Web Designer",
        image: "/assets/n.jpeg",
        review:
            "Helped us automate our workflow."
    }
];

export default function Testimonials() {
    return (
    <section className="overflow-hidden py-24">
        <h2 className="text-4xl font-bold mb-12">
            Client Reviews
        </h2>

        {/* Row 1 */}
        <div className="relative overflow-hidden mb-8">
            <div className="flex gap-8 animate-marquee-right w-max my-8">

                {reviews.concat(reviews).map((review, i) => (
                    <div
                        key={i}
                        className="min-w-[420px] max-w-[420px] flex gap-4 p-6 rounded-2xl bg-white shadow-lg"
                    >
                        <img
                            src={review.image}
                            alt=""
                            className="w-16 h-16 rounded-full object-cover"
                        />

                        <div>
                            <h4 className="font-bold text-[#006d5b]">
                                {review.name}
                            </h4>

                            <p className="text-sm text-gray-500 mb-2">
                                {review.role}
                            </p>

                            <p className="text-gray-600 text-sm">
                                {review.review}
                            </p>

                            <div className="text-yellow-500 mt-3">
                                ★★★★★
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

        {/* Row 2 */}
        <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-marquee-left w-max my-8">

                {reviews.concat(reviews).map((review, i) => (
                    <div
                        key={i}
                        className="min-w-[420px] max-w-[420px] flex gap-4 p-6 rounded-2xl bg-white shadow-lg"
                    >
                        <img
                            src={review.image}
                            alt=""
                            className="w-16 h-16 rounded-full object-cover"
                        />

                        <div>
                            <h4 className="font-bold text-[#006d5b]">
                                {review.name}
                            </h4>

                            <p className="text-sm text-gray-500 mb-2">
                                {review.role}
                            </p>

                            <p className="text-gray-600 text-sm">
                                {review.review}
                            </p>

                            <div className="text-yellow-500 mt-3">
                                ★★★★★
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
    );
}