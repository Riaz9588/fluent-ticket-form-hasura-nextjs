import React, { useEffect, useState } from 'react';

const DynamicFieldCreation = ({ setExtraFields }) => {
    const [fields, setFields] = useState([
        { title: '', type: 'input', value: '' },
        { title: '', type: 'date', value: '' },
        { title: '', type: 'select', value: '', options: ['Option 1'] },
    ]);

    setExtraFields(fields)

    //   useEffect(() => {
    //     setValues({
    //       ...values,
    //       status: fields,
    //     });
    //   }, [fields]);

    const addField = (type) => {
        if (type === 'select') {
            setFields([...fields, { title: '', type, value: '', options: [''] }]);
        } else {
            setFields([...fields, { title: '', type, value: '' }]);
        }
    };

    const removeField = (index) => {
        const updatedFields = [...fields];
        updatedFields.splice(index, 1);
        setFields(updatedFields);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedFields = [...fields];
        if (name === 'title') {
            updatedFields[index].title = value;
        } else if (name === 'type') {
            updatedFields[index].type = value;
            if (value === 'select') {
                updatedFields[index].options = ['']; // Reset options for select field
            }
        } else if (name === 'value') {
            updatedFields[index].value = value;
        } else if (name === 'option') {
            updatedFields[index].options[e.target.dataset.optionIndex] = value;
        }
        setFields(updatedFields);
    };

    const addSelectOption = (index) => {
        const updatedFields = [...fields];
        updatedFields[index].options.push('');
        setFields(updatedFields);
    };

    const removeSelectOption = (index, optionIndex) => {
        const updatedFields = [...fields];
        updatedFields[index].options.splice(optionIndex, 1);
        setFields(updatedFields);
    };


    return (
        <div className="fieldContainer">
            {fields.map((field, index) => (
                <div key={index} className="field mb-4">
                    <input
                        type="text"
                        name="title"
                        className="p-2 border rounded"
                        placeholder={`Field Title ${index + 1}`}
                        value={field.title}
                        onChange={(e) => handleChange(e, index)}
                    />
                    <select
                        name="type"
                        className="p-2 border rounded ml-2"
                        value={field.type}
                        onChange={(e) => handleChange(e, index)}
                    >
                        <option value="input">Input</option>
                        <option value="date">Date</option>
                        <option value="select">Select</option>
                    </select>
                    {field.type === 'select' ? (
                        <div className="relative ml-2">
                            {field.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="mb-2">
                                    <input
                                        type="text"
                                        name="option"
                                        data-option-index={optionIndex}
                                        className="p-2 border rounded"
                                        placeholder={`Option ${optionIndex + 1}`}
                                        value={option}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                    {optionIndex > 0 && (
                                        <button
                                            className="border border-red-500 text-red-500 px-2 py-1 rounded ml-2"
                                            onClick={() => removeSelectOption(index, optionIndex)}
                                        >
                                            Remove Option
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                className="border border-blue-500 text-blue-500 px-2 py-1 rounded ml-2"
                                onClick={() => addSelectOption(index)}
                            >
                                Add Option
                            </button>
                        </div>
                    ) : (
                        <input
                            type={field.type}
                            name="value"
                            className="p-2 border rounded ml-2"
                            placeholder={`Enter ${field.type}`}
                            value={field.value}
                            onChange={(e) => handleChange(e, index)}
                        />
                    )}
                    {fields.length > 1 && (
                        <button
                            className="border border-red-500 text-red-500 px-2 py-1 rounded ml-2"
                            onClick={() => removeField(index)}
                        >
                            Remove Field
                        </button>
                    )}
                </div>
            ))}
            <div className="mb-4">
                <button
                    className="border border-blue-500 text-blue-500 px-2 py-1 rounded"
                    onClick={() => addField('input')}
                >
                    Add Input Field
                </button>
                <button
                    className="border border-blue-500 text-blue-500 px-2 py-1 rounded ml-2"
                    onClick={() => addField('date')}
                >
                    Add Date Field
                </button>
                <button
                    className="border border-blue-500 text-blue-500 px-2 py-1 rounded ml-2"
                    onClick={() => addField('select')}
                >
                    Add Select Field
                </button>
            </div>
        </div>
    );
};

export default DynamicFieldCreation;
