import { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const mailtoBody = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
        const mailtoLink = `mailto:jwshepherd172002@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${mailtoBody}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="page-container">
            <h1 className="page-title txt-primary text-shadow">Contact</h1>

            <div className="contact-layout">
                <div className="contact-info">
                    <h2 className="txt-primary text-shadow">Let's Connect</h2>
                    <p className="txt-secondary">
                        I'm always interested in new opportunities, collaborations,
                        or just chatting about software engineering in general. Feel free to reach out!
                    </p>
                    <div className="contact-links">
                        <div className="contact-link txt-secondary">
                            <span>📧</span>
                            <span>jwshepherd172002@gmail.com</span>
                        </div>
                        <div className="contact-link txt-secondary">
                            <span>💻</span>
                            <span>github.com/j-w-s</span>
                        </div>
                    </div>
                </div>

                <form className="glass-panel card contact-form" onSubmit={handleSubmit}>
                    <h3 className="form-title txt-primary text-shadow">Email</h3>
                    <div className="form-group">
                        <label className="txt-primary" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="txt-primary" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="txt-primary" htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="What's this about?"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="txt-primary" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your message..."
                            required
                            rows={4}
                            className="form-input form-textarea"
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Contact;