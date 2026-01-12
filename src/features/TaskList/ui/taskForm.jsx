import FormContainer from "../../../shared/ui/form/formContainer";
import TextInput from "../../../shared/ui/form/inputs/textInput";
import SelectInput from "../../../shared/ui/form/inputs/selectInput";
import RadioInput from "../../../shared/ui/form/inputs/radioInput";
import CheckboxInput from "../../../shared/ui/form/inputs/checkboxInput";
import DateInput from "../../../shared/ui/form/inputs/dateInput";
import TextAreaInput from "../../../shared/ui/form/inputs/textareaInput";
import SubmitButton from "../../../shared/ui/form/submitButton";

function TaskForm({ register, errors, onSubmit }) {
    return (
        <FormContainer id="task-form" title="Crear Nova Tasca" onSubmit={onSubmit}>
            <div className="space-y-4">
                <TextInput
                    name="taskName"
                    label="Nom de la tasca"
                    placeholder="Introdueix el nom de la tasca"
                    register={register}
                    errors={errors}
                />
                <SelectInput
                    name="taskCategory"
                    register={register}
                    errors={errors}
                    options={[
                        { value: "", label: "-- Tria categoria --" },
                        { value: "Personal", label: "Personal" },
                        { value: "Casa", label: "Casa" },
                        { value: "Feina", label: "Feina" },
                        { value: "Estudis", label: "Estudis" },
                    ]}
                />

                <RadioInput
                    name="taskPriority"
                    label="Prioritat"
                    register={register}
                    errors={errors}
                    options={[
                        { value: "baixa", label: "Baixa" },
                        { value: "mitja", label: "Mitjana" },
                        { value: "alta", label: "Alta" },
                    ]}
                />

                <CheckboxInput
                    options={[
                        { name: "is-urgent", registerName: "urgent", label: "Es urgent" },
                        { name: "is-important", registerName: "taskImportant", label: "Es important" },
                    ]}
                    register={register}
                    errors={errors}
                />

                <DateInput name="taskDueDate" label="Data" register={register} errors={errors} />

                <TextAreaInput name="taskDescription" label="Descripció" rows={4} register={register} errors={errors} />

                <SubmitButton text="Afegir tasca" />
            </div>
        </FormContainer>
    );
}

export default TaskForm;
