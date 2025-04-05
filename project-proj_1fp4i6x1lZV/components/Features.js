function Features() {
    try {
        return (
            <section className="px-4 py-12 bg-white" data-name="features-section">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800" data-name="features-title">
                        Game Features
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-name="features-grid">
                        <div className="feature-card p-6 rounded-xl bg-gray-50" data-name="feature-card">
                            <i className="fas fa-gamepad text-3xl mb-4 feature-icon"></i>
                            <h3 className="text-xl font-semibold mb-2">Intuitive Controls</h3>
                            <p className="text-gray-600">Easy to learn, challenging to master gameplay mechanics</p>
                        </div>
                        <div className="feature-card p-6 rounded-xl bg-gray-50" data-name="feature-card">
                            <i className="fas fa-level-up-alt text-3xl mb-4 feature-icon"></i>
                            <h3 className="text-xl font-semibold mb-2">Character Progress</h3>
                            <p className="text-gray-600">Level up and unlock powerful new abilities</p>
                        </div>
                        <div className="feature-card p-6 rounded-xl bg-gray-50" data-name="feature-card">
                            <i className="fas fa-trophy text-3xl mb-4 feature-icon"></i>
                            <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                            <p className="text-gray-600">Complete challenges and earn rewards</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
        return null;
    }
}
