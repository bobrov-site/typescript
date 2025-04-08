enum ResponseStatuses {
    PUBLICHED = 'publiched',
    DRAFT = 'draft',
    DELETED = 'deleted'
}    
    
    async function getFaqs(req: {topicId: number, status?: ResponseStatuses}): Promise<{
        question: string,
        answer: string
        tags: string[],
        likes: number,
        status: ResponseStatuses
    }[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data: {
        question: string,
        answer: string
        tags: string[],
        likes: number,
        status: ResponseStatuses
    }[] = await res.json();
    return data;
}

let age: number = 15