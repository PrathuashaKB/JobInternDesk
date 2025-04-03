function getBotResponse(input) {
    // Job-related responses
    if (input.toLowerCase().includes("job") || input.toLowerCase().includes("career")) {
        return "You can search for job openings on our website by visiting the 'Jobs' section. If you have any specific questions about the application process, feel free to ask!";
    } else if (input.toLowerCase().includes("internships")) {
        return "You can search for job openings on our website by visiting the 'Internships' section in Job List section . If you have any specific questions about the application process, feel free to ask!";
    } else if (input.toLowerCase().includes("apply") || input.toLowerCase().includes("application")) {
        return "To apply for a job, you can visit the 'Apply' section on our website and follow the instructions provided for each job listing. If you face any issues during the application process, our support team will be glad to assist you.";
    } else if (input.toLowerCase().includes("interview")) {
        return "Preparing for an interview is crucial. Make sure to research the company, practice common interview questions, and dress professionally. Good luck!";
    }

    // Explore Jobs Category-Wise
    else if (input.toLowerCase().includes("explore") || input.toLowerCase().includes("category")) {
        return "Our JobInternDesk offers various job categories, including IT, Web development, Data Analytics, Marketing, Engineering, and more. To explore jobs category-wise, simply visit the 'Jobs category' section on our website and use the filters to find jobs in your preferred category.";
    }

    // Know About Us
    else if (input.toLowerCase().includes("about") || input.toLowerCase().includes("who are you")) {
        return "We are a leading job portal dedicated to connecting job seekers with top employers. To know more about us check out 'About' section. Our platform provides a wide range of job opportunities across various industries. If you have any specific questions about our company or services, feel free to ask!";
    } 

    // Contact Us
    else if (input.toLowerCase().includes("contact") || input.toLowerCase().includes("contact us")) {
        return "You can get in touch with our support team by visiting the 'Contact Us' section on our website. Alternatively, you can send an email to support@jobportal.com or call our toll-free number: 1-800-JOB-PORTAL. We'll be happy to assist you!";
    }

    // Simple responses
    else if (input.toLowerCase().includes("hello") || input.toLowerCase().includes("hi")) {
        return "Hello! I'm Disha. How can I assist you today?";
    } else if (input.toLowerCase().includes("goodbye") || input.toLowerCase().includes("bye") || input.toLowerCase().includes("thank you")) {
        return "Thank you for using our chatbot. If you have any more questions, feel free to ask anytime. Goodbye!";
    } else {
        return "I'm sorry, I couldn't understand your question. Please try asking something else related to job search or the application process.";
    }
}
