import { useState } from '@wordpress/element';
import { BaseControl, TextControl, SelectControl, Tooltip, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { link, linkOff } from '@wordpress/icons';
import DeviceSwitcher from '../../DeviceSwitcher';

const DimensionControl = ({ label, value, onChange }) => {
    const [device, setDevice] = useState('desktop');

    const current = value[device] || {
        top: 0, right: 0, bottom: 0, left: 0,
        unit: 'px', isLinked: false
    };

    const cloneDevice = () => ({
        ...value[device],
        top: value[device].top ?? 0,
        right: value[device].right ?? 0,
        bottom: value[device].bottom ?? 0,
        left: value[device].left ?? 0,
        unit: value[device].unit || 'px',
        isLinked: value[device].isLinked || false,
    });

    const handleChange = (side, val) => {
        const newDevice = cloneDevice();
        const numVal = val === '' ? '' : parseFloat(val) || 0;

        if (newDevice.isLinked) {
            ['top', 'right', 'bottom', 'left'].forEach((s) => {
                newDevice[s] = numVal;
            });
        } else {
            newDevice[side] = numVal;
        }

        onChange({
            ...value,
            [device]: newDevice
        });
    };

    const toggleLink = () => {
        onChange({
            ...value,
            [device]: {
                ...cloneDevice(),
                isLinked: !current.isLinked
            }
        });
    };

    const handleUnitChange = (unit) => {
        onChange({
            ...value,
            [device]: {
                ...cloneDevice(),
                unit
            }
        });
    };

    return (
        <div className="responsive-dimension-control">
            <BaseControl label={label}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                <DeviceSwitcher device={device} onChange={setDevice} syncPreview className="device-switcher responsive-toggle" />

                <SelectControl
                    value={current.unit || 'px'}
                    options={[
                        { label: 'px', value: 'px' },
                        { label: '%', value: '%' },
                        { label: 'em', value: 'em' },
                    ]}
                    onChange={handleUnitChange}
                    className="unit-selector"
                />
                </div>

                <div className="dimension-inputs">
                    {['top', 'right', 'bottom', 'left'].map((side) => (
                        <TextControl
                            key={side}
                            value={current[side] ?? ''}
                            type="number"
                            onChange={(val) => handleChange(side, val)}
                            className={`dimension-input dimension-${side}`}
                            label={side.toUpperCase()}
                        />
                    ))}

                    <Tooltip text={current.isLinked ? 'Unlink values' : 'Link values'}>
                        <Button
                            icon={current.isLinked ? link : linkOff}
                            isPressed={current.isLinked}
                            onClick={toggleLink}
                            className="link-toggle"
                        />
                    </Tooltip>
                </div>
            </BaseControl>

            <style jsx>{`
                .responsive-dimension-control {
                    margin-bottom: 15px;
                }
                .device-switcher {
                    margin-bottom: 10px;
                }
                .dimension-inputs {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    flex-wrap: wrap;
                }
                .dimension-input {
                    width: 42px;
                }
                .link-toggle {
                    margin-left: 4px;
                }
                .unit-selector {
                    width: 50px;
                    margin-left: auto;
                }
            `}</style>
        </div>
    );
};
export default DimensionControl;