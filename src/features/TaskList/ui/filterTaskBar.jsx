import FormContainer from "../../../shared/ui/form/formContainer";
import TextInput from "../../../shared/ui/form/inputs/textInput";
import SubmitButton from "../../../shared/ui/form/submitButton";
import Button from "../../../shared/ui/button";

function FilterTaskBar({ register, errors, onSubmit, resetFilter }) {
    return (
        <FormContainer id="filter-form" title="" onSubmit={onSubmit}>
            <div className="flex gap-3 items-center w-full">
                <div className="flex-1">
                    <TextInput
                        name="filter"
                        label=""
                        placeholder="filtra per nom"
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
                    <SubmitButton text="filter" className="h-10" />
                    <Button text="reset filter" onClick={() => resetFilter()} variant="secondary" className="h-10" />
                </div>
            </div>
        </FormContainer>
    );
}

export default FilterTaskBar;
