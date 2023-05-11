<?php

namespace App\Http\Requests\JobList;

use App\Enums\JobType;
use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class UpdateJobListRequest extends FormRequest
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
            'departmentId' => ['required', 'exists:departments,id'],
            'shipId' => ['required', 'exists:ships,id'],
            'typingSystemId' => ['required', 'exists:typing_systems,id'],
            'componentName' => ['required', 'string', 'max:255'],
            'componentCode' => ['required', 'string', 'max:255'],
            'partName' => ['required', 'string', 'max:255'],
            'jobType' => ['required', new Enum(JobType::class)],
            'jobName' => ['required', 'string', 'max:255'],
            'approvedJob' => ['required', 'boolean'],
            'personInCharge' => ['required', 'string', 'max:255'],
            'status' => ['required', 'string', 'max:255'],
            'level' => ['required', 'string', 'max:255'],
        ];
    }
}
