import React from "react";
import './DirectionArticle.css';

export const DirectionArticle = ({title}) => {
    return (
        <div className='direction-article'>
            <div className='direction-article-title main-title'>{title}</div>
            <div className='direction-article-text main-text'>
                <div className='direction-article-paragraph'>
                    Основной принцип нашей работы – максимальная открытость и доверительные отношения с каждым клиентом,
                    с тем чтобы от начала и до конца совместной работы, не возникало никакого недопонимания. Мы ставим
                    целью не только привлечение новых клиентов, но и поддержание длительных партнерских отношений с
                    клиентами, которые уже воспользовались нашими услугами.
                </div>
                <div>
                    Быстрота анализа и профессиональных действий
                    наших юристов обеспечивают успешное решение, казалось бы, неразрешимых вопросов. Богатые знания и
                    солидный опыт позволяют нам оказывать комплексную правовую помощь в ситуациях любой сложности.
                </div>
            </div>
        </div>
    )
};