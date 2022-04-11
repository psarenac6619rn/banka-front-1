import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function RadioButton(props) {
    const style = classNames(
        "p-3",
        "cursor-pointer",
        "border first:border-l border-l-0 border-gray-300 first:rounded-l last:rounded-r border-collapse",
        "bg-white hover:bg-gray-100",
        "select-none",
        { "text-indigo-500 font-semibold": props.isActive },
    )

    const labelStyle = classNames(
    )

    return (
        <label className={style} htmlFor={props.value}>
            <input className="hidden" type="radio" name={props.name} id={props.value} value={props.value} onChange={props.onChange} />
            {props.label}
        </label>
    );
}

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

function RadioGroup(props) {
    const [active, setActive] = useState(props.options[0])

    const style = classNames(
        "flex",
    )

    function handleChange(e) {
        console.log(e.target.value)
        setActive(e.target.value)
        props.onChange(e.target.value)
    }

    return (
        <div className={style} >
            {props.options && props.options.map(o => <RadioButton value={o} name={props.name} label={o} onChange={handleChange} isActive={o === active} />)}
        </div>
    );
}

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
}

export default RadioGroup