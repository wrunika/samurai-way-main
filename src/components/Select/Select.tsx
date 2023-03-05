import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onClickSelect: (value: any) => void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value);
    const [active, setActive] = useState<boolean>(false);

    useEffect( ()=>{
        setHoveredItemValue(props.value)
    }, [props.value] )
    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onClickSelect(value);
        setActive(!active)
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const pretendentItem = e.key === 'ArrowDown' ? props.items[i + 1] :  props.items[i - 1];
                    if (pretendentItem) {
                        props.onClickSelect(pretendentItem.value);
                        return;
                    }
                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
        if (!firstTitle) {
            props.onClickSelect(props.items[0].value)
        }
    }

    const onBlurHandler = () => {
      setActive(false)
    }

    //let selectStyles = s.mySelect + ' ' + (active ? s.active : + '');
    //const firstTitle = props.items[+props.value-1].title;
    const firstTitle = props.items.find(i => i.value === props.value);
    return (
        <div>
            <h4>My select</h4>
            <div className={s.mySelect} onBlur={onBlurHandler} onKeyUp={ onKeyUp } tabIndex={0}>
                <div className={s.firstTitle} onClick={toggleItems}>{firstTitle && firstTitle.title}</div>
                {
                    active &&
                    <div className={s.items}>
                        { props.items.map((i, index) => {
                                    return (
                                        <div key={index}
                                             className={s.item + ' ' + (hoveredItemValue === i.value ? s.selected : '')}
                                             onMouseEnter={ ()=>{setHoveredItemValue(i.value)} }
                                             onClick={() => {onItemClick(i.value)}}>
                                            {i.title}
                                        </div>
                                    )
                                }
                            )}
                    </div>
                }
            </div>
        </div>
    );
};

export const SelectM = React.memo(Select);