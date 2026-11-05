import './PriceFilter.scss';
import numeral from 'numeral';
import MultiRangeSlider from 'multi-range-slider-react';

function PriceFilter({ min, max, minValue, maxValue, onChange }) {
    return (
        <div className="price-filter">
            <div className="price-filter-title">LỌC THEO GIÁ</div>
            <MultiRangeSlider
                min={min}
                max={max}
                step={5}
                ruler={false}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => onChange(e.minValue, e.maxValue)}
            />
            <div className="price-filter-value">
                GIÁ:
                <b>
                    {numeral(minValue).format('0,0')} <u>đ</u> - {numeral(maxValue).format('0,0')} <u>đ</u>
                </b>
            </div>
        </div>
    );
}

export default PriceFilter;
