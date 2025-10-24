import { useState } from 'react';
import { CantineType } from './types';
import Image from 'next/image';

export default function MenusCard({ title, image }: CantineType) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`agenda-card ${expanded ? 'expanded' : ''}`}>
            <h3>{title}</h3>


            {expanded && image && (
                <div className="agenda-description">
                    <Image
                        src={image}
                        alt={title}
                        width={1400}
                        height={600}
                        priority
                    />
                </div>
            )}

            <button className="voir-plus" onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Voir moins' : 'Voir plus'}
            </button>
        </div>
    );
}