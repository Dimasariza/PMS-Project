<?php

namespace App\Http\Requests\Department;

use App\Enums\WorkPlace;
use Illuminate\Validation\Rule;
use App\Traits\FailedValidation;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Foundation\Http\FormRequest;

class UpdateDepartmentRequest extends FormRequest
{
    use FailedValidation;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'departmentName' => ['required', 'string', 'max:255'],
            'departmentCode' => ['required', 'string', 'max:255', Rule::unique('departments', 'department_code')->ignore($this->department)],
            'workPlace' => ['required', new Enum(WorkPlace::class)],
        ];
    }
}
