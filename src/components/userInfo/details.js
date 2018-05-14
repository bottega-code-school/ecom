import React from 'react';

export const Details = (title, content, className) => (
    <div className={`details-item details__${className}`}>
        <div className="details-item__title">{title}</div>
        <div className="details-item__content">{content}</div>
    </div>
)



